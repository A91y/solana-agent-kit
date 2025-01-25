import { SolanaAgentKit } from "../../index";
import BN from "bn.js";
import { createIx } from "./helper";
import { Transaction } from "@solana/web3.js";
import { ComputeBudgetProgram } from "@solana/web3.js";
import { uploadToIpfs } from "./uploadMetadata";

export async function create_xcombinator_agent(
  agent: SolanaAgentKit,
  tokenName: string,
  tokenSymbol: string,
  imageUrl: string,
  merkleRoot: number[] | null,
  startTime: number,
  firstBuyAmount: number,
  creatorBuyAmount: number,
  maxBuyAmount: number,
  vestingDuration: number,
) {
  const metadataUri = await uploadToIpfs(
    tokenName,
    tokenSymbol,
    imageUrl,
    `${tokenName} ${tokenSymbol} NFT`,
  );
  const { ixs, launchId } = await createIx(agent, agent.wallet_address, {
    name: tokenName,
    symbol: tokenSymbol,
    uri: metadataUri,
    merkleRoot,
    startTime: new BN(startTime),
    firstBuyAmount: new BN(firstBuyAmount),
    creatorBuyAmount: new BN(creatorBuyAmount),
    maxBuyAmount: new BN(maxBuyAmount),
    vestingDuration: new BN(vestingDuration),
  });

  const createTxn = new Transaction();
  const units = 300_000;
  createTxn.add(
    ComputeBudgetProgram.setComputeUnitLimit({
      units,
    }),
  );
  createTxn.add(...ixs);
  createTxn.feePayer = agent.wallet_address;

  createTxn.sign(agent.wallet);

  const txId = await agent.connection.sendRawTransaction(createTxn.serialize());

  return {
    txId,
    launchId,
  };
}
