import type { NextApiRequest, NextApiResponse } from "next";

import path from "path";
import { promises as fs } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ profile: Profile | null }>
) {
  const { id } = req.query;
  let profile: Profile | null;
  
  
  try {
    if (id) {
      const jsonDirectory = path.join(process.cwd(), "public", "data");
      const fileContents = await fs.readFile(jsonDirectory + "/sample.json", "utf8");
      const json = JSON.parse(fileContents);

      profile = json.find((p: Profile) => p.id === id);

      if (!profile) {
        throw new Error("No profile found");
      }
    } else {
      throw new Error("No id provided");
    }
  } catch (e) {
    console.error(`Error in random:\n\t` + e);
    profile = null;
  }

  res.status(profile ? 200 : 404).json({ profile });
}
