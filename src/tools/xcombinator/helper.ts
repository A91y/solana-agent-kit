import { AnchorProvider, BN, Program } from "@coral-xyz/anchor";
import { SolanaAgentKit } from "../../agent";
import { PumpLaunchpad, IDL as PumpLaunchpad_IDL } from "./pump_launchpad";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { PublicKey } from "@solana/web3.js";
import {
  ALLOCATION_SEED,
  GLOBAL_SEED,
  LAUNCH_SEED,
  METADATA_SEED,
  MINT_SEED,
  programAddress,
  programId,
} from "./constants";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountIdempotentInstruction,
  createAssociatedTokenAccountInstruction,
  createCloseAccountInstruction,
  createSyncNativeInstruction,
  getAssociatedTokenAddressSync,
  NATIVE_MINT,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { FEE_RECIPIENT } from "./constants";
import { SystemProgram } from "@solana/web3.js";
import { TOKEN_METADATA_PROGRAM_ID } from "@onsol/tldparser";
import { RENT_PROGRAM_ID } from "@raydium-io/raydium-sdk-v2";

export async function createIx(
  agent: SolanaAgentKit,
  user: PublicKey,
  args: CreateArgs,
) {
  const program = getProgram(agent);

  const global = getGlobalAddress();
  const globalInfo = await program.account.global.fetch(global);
  const launchId = globalInfo.tokens + 1;

  const launch = getLaunchAddress(launchId);
  const tokenMint = getTokenMintAddress(launchId);
  const metadata = getMetadataAddress(tokenMint);

  const payAssociatedUser = getAssociatedTokenAddressSync(NATIVE_MINT, user);

  const associatedLaunch = getAssociatedTokenAddressSync(
    tokenMint,
    launch,
    true,
  );
  const payAssociatedLaunch = getAssociatedTokenAddressSync(
    NATIVE_MINT,
    launch,
    true,
  );

  const ixs = [
    createAssociatedTokenAccountInstruction(
      user,
      payAssociatedLaunch,
      launch,
      NATIVE_MINT,
    ),
    await program.methods
      .create(args)
      .accounts({
        user,
        global,
        launch,
        tokenMint,
        metadata,
        associatedLaunch,
        tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        tokenProgram: TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
        rent: RENT_PROGRAM_ID,
      })
      .instruction(),
  ];

  if (args.creatorBuyAmount.toNumber() > 0) {
    ixs.push(
      createAssociatedTokenAccountIdempotentInstruction(
        user,
        payAssociatedUser,
        user,
        NATIVE_MINT,
      ),
      SystemProgram.transfer({
        fromPubkey: user,
        toPubkey: payAssociatedUser,
        lamports: args.creatorBuyAmount.toNumber(),
      }),
      createSyncNativeInstruction(payAssociatedUser),
      await program.methods
        .fund(args)
        .accounts({
          user,
          global,
          payAssociatedUser,
          launch,
          payAssociatedLaunch,
          payTokenMint: NATIVE_MINT,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
        })
        .instruction(),
      createCloseAccountInstruction(payAssociatedUser, user, user),
    );
  }

  if (args.firstBuyAmount.toNumber() > 0) {
    const buyIxs = await buyIx(agent, user, {
      id: launchId,
      tokenAmount: args.firstBuyAmount,
      allocation: null,
      proof: null,
      price: globalInfo.price,
    });
    ixs.push(...buyIxs);
  }

  return { ixs, launchId };
}

const buyIx = async (agent: SolanaAgentKit, user: PublicKey, args: BuyArgs) => {
  const program = getProgram(agent);

  const launch = getLaunchAddress(args.id);

  const payAssociatedUser = getAssociatedTokenAddressSync(NATIVE_MINT, user);

  const allocation = getAllocationAddress(user, args.id);

  const solAmount = new BN(args.tokenAmount.toString())
    .div(new BN(10).pow(new BN(6)))
    .mul(new BN(args.price.toString()))
    .toNumber();

  const payAssociatedLaunch = getAssociatedTokenAddressSync(
    NATIVE_MINT,
    launch,
    true,
  );
  const global = getGlobalAddress();

  const ixs = [
    createAssociatedTokenAccountIdempotentInstruction(
      user,
      payAssociatedUser,
      user,
      NATIVE_MINT,
    ),
    SystemProgram.transfer({
      fromPubkey: user,
      toPubkey: payAssociatedUser,
      lamports: solAmount,
    }),
    createSyncNativeInstruction(payAssociatedUser),
    createAssociatedTokenAccountIdempotentInstruction(
      user,
      payAssociatedLaunch,
      launch,
      NATIVE_MINT,
    ),
    await program.methods
      .buy({
        tokenAmount: args.tokenAmount,
        allocation: args.allocation,
        proof: args.proof,
      })
      .accounts({
        user,
        allocation,
        global,
        payAssociatedUser,
        launch,
        payTokenMint: NATIVE_MINT,
        payAssociatedLaunch,
        feeRecipient: FEE_RECIPIENT,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        tokenProgram: TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
      })
      .instruction(),
    createCloseAccountInstruction(payAssociatedUser, user, user),
  ];

  return ixs;
};

export type CreateArgs = {
  name: string;
  symbol: string;
  uri: string;
  merkleRoot: number[] | null;
  startTime: BN;
  firstBuyAmount: BN;
  creatorBuyAmount: BN;
  maxBuyAmount: BN;
  vestingDuration: BN;
};

const getProgram = (agent: SolanaAgentKit) => {
  return new Program<PumpLaunchpad>(
    PumpLaunchpad_IDL,
    programAddress,
    new AnchorProvider(agent.connection, new NodeWallet(agent.wallet), {
      commitment: "processed",
      skipPreflight: true,
    }),
  );
};

function getGlobalAddress() {
  const [global] = PublicKey.findProgramAddressSync(
    [Buffer.from(GLOBAL_SEED)],
    programId,
  );

  return global;
}

function getLaunchAddress(launchId: number) {
  const launchIdBuffer = Buffer.alloc(4);
  launchIdBuffer.writeUInt32LE(launchId);

  const [launch] = PublicKey.findProgramAddressSync(
    [Buffer.from(LAUNCH_SEED), launchIdBuffer],
    programId,
  );

  return launch;
}

function getTokenMintAddress(launchId: number) {
  const launchIdBuffer = Buffer.alloc(4);
  launchIdBuffer.writeUInt32LE(launchId);

  const [tokenMint] = PublicKey.findProgramAddressSync(
    [Buffer.from(MINT_SEED), launchIdBuffer],
    programId,
  );

  return tokenMint;
}

function getMetadataAddress(tokenMint: PublicKey) {
  const TOKEN_METADATA_PROGRAM_ID = new PublicKey(
    "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
  );
  const [metadata] = PublicKey.findProgramAddressSync(
    [
      Buffer.from(METADATA_SEED),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      tokenMint.toBuffer(),
    ],
    TOKEN_METADATA_PROGRAM_ID,
  );

  return metadata;
}

function getAllocationAddress(user: PublicKey, tokenId: number) {
  const launchIdBuffer = Buffer.alloc(4);
  launchIdBuffer.writeUInt32LE(tokenId);

  const [allocation] = PublicKey.findProgramAddressSync(
    [Buffer.from(ALLOCATION_SEED), user.toBuffer(), launchIdBuffer],
    programId,
  );

  return allocation;
}

type BuyArgs = {
  id: number;
  tokenAmount: BN;
  price: BN;
  allocation: BN | null;
  proof: number[][] | null;
};
