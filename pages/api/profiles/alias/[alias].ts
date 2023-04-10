import type { NextApiRequest, NextApiResponse } from "next";

import path from "path";
import { promises as fs } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ profile: IProfile | null }>
) {
  const { alias } = req.query;
  let profile: IProfile | null = null;
  let statusCode: number = 200;

  try {
    if (!alias) {
      throw {
        message: "No alias provided",
        statusCode: 400,
      }
    }

    const jsonDirectory = path.join(process.cwd(), "public", "data");
    const fileContents = await fs.readFile(jsonDirectory + "/sample.json", "utf8");
    const json = JSON.parse(fileContents);

    profile = json.find((p: IProfile) => p.contact.alias === alias);

    if (!profile) {
      throw {
        message: "Profile not found",
        statusCode: 404,
      }
    }

  } catch (e: any) {
    statusCode = e.statusCode || 500;
    console.error(`Error ${statusCode} in random:\n\t` + (e.message ?? e));
  }

  res.status(statusCode).json({ profile });
}
