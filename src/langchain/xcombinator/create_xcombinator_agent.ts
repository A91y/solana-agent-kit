import { Tool } from "langchain/tools";
import { SolanaAgentKit } from "../../agent";

export class SolanaCreateXCombinatorAgent extends Tool {
  name = "create_xcombinator_agent";
  description = `Create an XCombinator agent on Solana.
  
  Inputs (JSON string):
  - tokenName: string, the name of the token (required).
  - tokenSymbol: string, the symbol of the token (required).
  - imageUrl: string, the URL of the image for the token (required).
  - startTime: number, the start time of the token sale (optional).
  - firstBuyAmount: number, the amount of the first buy (optional).
  - creatorBuyAmount: number, the amount of the creator buy (optional).
  - maxBuyAmount: number, the maximum buy amount (optional).

  Example with required parameters:
  {
    "tokenName": "MyToken",
    "tokenSymbol": "MTK",
    "imageUrl": "https://example.com/image.png"
  }

  Example with all parameters:
  {
    "tokenName": "MyToken",
    "tokenSymbol": "MTK",
    "imageUrl": "https://example.com/image.png",
    "startTime": 1633024800,
    "firstBuyAmount": 100,
    "creatorBuyAmount": 50,
    "maxBuyAmount": 1000,
    "vestingDuration": 3600
  }`;

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
      const startTime = inputFormat.startTime;
      const firstBuyAmount = inputFormat.firstBuyAmount;
      const creatorBuyAmount = inputFormat.creatorBuyAmount;
      const maxBuyAmount = inputFormat.maxBuyAmount;
      const vestingDuration = inputFormat.vestingDuration;

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
