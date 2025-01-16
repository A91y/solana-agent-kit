import { Tool } from "langchain/tools";
import { SolanaAgentKit } from "../../agent";

export class SolanaCreateXCombinatorAgent extends Tool {
  name = "create_xcombinator_agent";
  description = `Create an XCombinator agent on Solana.
  
  Inputs (JSON string):
  - tokenName: string, the name of the token (required).
  - tokenSymbol: string, the symbol of the token (required).
  - metadataUri: string, the URI of the metadata for the token (required).
  - merkleRoot: number[] | null, the merkle root of the token metadata (optional).
  - startTime: number, the start time of the token sale (required).
  - firstBuyAmount: number, the amount of the first buy (required).
  - creatorBuyAmount: number, the amount of the creator buy (required).
  - maxBuyAmount: number, the maximum buy amount (required).`;

  constructor(private solanaKit: SolanaAgentKit) {
    super();
  }

  protected async _call(input: string): Promise<string> {
    try {
      const inputFormat = JSON.parse(input);
      const tokenName = inputFormat.tokenName;
      const tokenSymbol = inputFormat.tokenSymbol;
      const metadataUri = inputFormat.metadataUri;
      const merkleRoot = inputFormat.merkleRoot;
      const startTime = inputFormat.startTime;
      const firstBuyAmount = inputFormat.firstBuyAmount;
      const creatorBuyAmount = inputFormat.creatorBuyAmount;
      const maxBuyAmount = inputFormat.maxBuyAmount;

      const { txId, launchId } = await this.solanaKit.createXCombinatorAgent(
        tokenName,
        tokenSymbol,
        metadataUri,
        merkleRoot,
        startTime,
        firstBuyAmount,
        creatorBuyAmount,
        maxBuyAmount,
      );

      return JSON.stringify({
        status: "success",
        message: "Agent Successfully Launched",
        transaction: txId,
        launchId: launchId.toString(),
        tokenSymbol: tokenSymbol,
      });
    } catch (error: any) {
      return JSON.stringify({
        status: "error",
        message: error.message,
        code: error.code || "CREATE_XCOMBINATOR_AGENT_ERROR",
      });
    }
  }
}
