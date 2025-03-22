import type { IConversation } from "../types";

export const createConversation = async (targetUrl: string): Promise<IConversation> => {

  // fetch context on this url  targetURl
  //then craete conversation context https://www.buysmart.ai/chat/Cv3UeFfyRE2h6xTsOjqnx



  const response = await fetch("https://tavusapi.com/v2/conversations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": import.meta.env.VITE_TAVUS_API_KEY,
    },
    body: JSON.stringify({
      // Stock Demo Persona (Santa in our case)
      persona_id: "p3bb4745d4f9",
      properties: {
        // Apply greenscreen to the background
        apply_greenscreen: true,
      },
      // ideally this will contact agent and get this info
      conversational_context: `## 11-inch Green Glittered Tree with Red Cardinals Christmas Decoration Sales Information\n\n## 1. About the Christmas Tree\n\nPurpose & Aesthetic:\nThe 11-inch Green Glittered Tree with Red Cardinals Christmas Decoration is designed to bring festive cheer to small spaces. Its glittered green finish and red cardinal accents offer a visually appealing holiday accent.\n\nKey Features:\n- Festive Design: Accented with red cardinals and embellished with green glitter for a holiday look.\n- Compact Size: Ideal for tabletops, shelves, and mantles.\n\n---\n\n## 2. Product Specifications\n\n### A. 11-inch Green Glittered Tree with Red Cardinals\n\nOverview:\nThe core offering is an 11-inch tall Christmas tree designed for indoor use.\n\nKey Specifications:\n- Trim Options (Retailers & Pricing):\n  - Walmart - Christmas Central: $28.31\n  - eBay - christmascentral: $30.23\n  - Christmas Central: $31.19\n  - Bed Bath & Beyond: $31.19\n- Dimensions:\n  - 11 inches high x 3.5 inches in diameter\n- Material:\n  - Resin with a wooden base\n- Intended Use:\n  - Indoor\n\nSelling Points:\n- Adds a touch of festive cheer to any small space.\n- Readily available from multiple retailers, offering price options.\n\n---\n\n## 3. Sales Techniques & Key Messaging\n\n### Reasons to Buy\n- Pretty Decoration: Users found the tree to be visually appealing.\n- Compact Size: The 11-inch size is suitable for tabletops and shelves.\n- Positive Reviews: Generally well-received with positive ratings on Target and Walmart.\n\n### Reasons Not to Buy\n- Misleading Image: The product image shows three trees, but only one is included.\n- Potential Quality Issues: At least one user received a broken item.\n- Small Size: May not be suitable for those seeking a larger Christmas decoration.\n- Material Sensitivity: Resin may be susceptible to damage from moisture or extreme temperatures.\n 
      about Balsam Hill: 
      
      The Ultimate in Realistic Artificial Christmas Trees
Looking for a Christmas tree that's beautiful, hassle-free, and lasts for years? Look no further than Balsam Hill!

Balsam Hill is renowned for creating ultra-realistic artificial Christmas trees that bring the magic of the holidays home without the mess and inconvenience of a real tree. We're talking:

Incredibly lifelike foliage: Our trees feature True Needle™ technology, meticulously molded from real tree branches for unparalleled realism.

Unmatched beauty and design: From classic to contemporary, we offer a wide variety of styles, sizes, and lighting options to perfectly match your decor and space.

Pre-lit convenience: Spend less time stringing lights and more time enjoying the season with our expertly pre-lit trees, featuring energy-efficient LEDs.

Durability and lasting beauty: Crafted with premium materials, our trees are built to last for years, becoming a cherished part of your holiday traditions.

Effortless setup and storage: Easy to assemble and disassemble, our trees come with helpful features for stress-free setup and convenient storage.

Choose Balsam Hill and experience the joy of a stunning Christmas tree, year after year, without the hassle!
      `
    }),
  });

  if (!response?.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
