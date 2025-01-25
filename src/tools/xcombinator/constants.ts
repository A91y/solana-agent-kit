import { PublicKey } from "@solana/web3.js";

export const programAddress = "H84ePrxMpeuTrXqXhUwBB61uqVkjYnNNk93KvifJfNk";
export const programId = new PublicKey(programAddress);

export const LAUNCH_SEED = "launch";
export const ALLOCATION_SEED = "allocation";
export const MINT_SEED = "mint";
export const METADATA_SEED = "metadata";
export const GLOBAL_SEED = "global";
export const FEE_RECIPIENT = new PublicKey(
  "HxW4EmTr2WhvrKuxXjB5t5hEpftNebxw6mXsVxcYDMHT",
);
