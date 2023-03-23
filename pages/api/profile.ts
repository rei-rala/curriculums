import { IProfile } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

import path from "path";
import { promises as fs } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ profile: IProfile | null }>
) {
  const { id } = req.body;
  let profile = null;


  if (id) {
    const jsonDirectory = path.join(process.cwd(), "public", "data");
    const fileContents = await fs.readFile(jsonDirectory + '/sample.json', 'utf8');

    profile = JSON.parse(fileContents).find((p: IProfile) => p.id === id);
  }

  res.status(200).json({ profile });
}
