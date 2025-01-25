import { Tool } from "langchain/tools";
import { SolanaAgentKit } from "../../agent";

export class SolanaCreateXCombinatorAgent extends Tool {
  name = "create_xcombinator_agent";
  description = `Create an XCombinator agent on Solana.
  
  This tool allows you to create a new XCombinator agent on the Solana blockchain. You need to provide the following inputs in a JSON string format:

  Inputs (JSON string):
  - tokenName: string, the name of the token (required).
  - tokenSymbol: string, the symbol of the token (required).
  - imageUrl: string, the URI of the image for the token (required).
  - maxBuyAmount: number, the maximum buy amount (optional).
  - firstBuyAmount: number, the amount of the first buy (optional).
  - creatorBuyAmount: number, the amount of the creator buy (optional).
  - startTime: number, the start time of the token sale (optional).
  
  Example input:
  {
    "tokenName": "MyToken",
    "tokenSymbol": "MTK",
    "imageUrl": "https://example.com/image.jpg",
  }
  `;

  constructor(private solanaKit: SolanaAgentKit) {
    super();
  }

  protected async _call(input: string): Promise<string> {
    try {
      const inputFormat = JSON.parse(input);
      const tokenName = inputFormat.tokenName;
      const tokenSymbol = inputFormat.tokenSymbol;
      const imageUrl = inputFormat.imageUrl;
      const merkleRoot = null;
      const firstBuyAmount = inputFormat.firstBuyAmount ?? 0;
      const creatorBuyAmount = inputFormat.creatorBuyAmount ?? 0;
      const maxBuyAmount = inputFormat.maxBuyAmount ?? 0;
      const vestingDuration = inputFormat.vestingDuration ?? 0;
      const startTime = inputFormat.startTime ?? Date.now();

      const { txId, launchId } = await this.solanaKit.createXCombinatorAgent(
        tokenName,
        tokenSymbol,
        imageUrl,
        merkleRoot,
        startTime,
        firstBuyAmount,
        creatorBuyAmount,
        maxBuyAmount,
        vestingDuration,
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
