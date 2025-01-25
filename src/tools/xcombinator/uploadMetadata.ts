import FormData from "form-data";
import axios from "axios";

const API_ENDPOINT = "https://projectxsol.vercel.app/api/createMetadata";

export const uploadToIpfs = async (
  name: string,
  symbol: string,
  imageUrl: string,
  description: string,
) => {
  try {
    const jsonData = {
      name,
      symbol,
      image: imageUrl,
      description,
    };

    const jsonBuffer = Buffer.from(JSON.stringify(jsonData));

    const formData = new FormData();
    formData.append("file", jsonBuffer, {
      filename: "metadata.json",
      contentType: "application/json",
    });

    formData.append("name", jsonData.name);
    formData.append("symbol", jsonData.symbol);
    formData.append("image", jsonData.image);
    formData.append("description", jsonData.description);

    const response = await axios.post(API_ENDPOINT, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    return response.data.metadataUri;
  } catch (error) {
    console.error("Error uploading to IPFS:", error);
  }
};
