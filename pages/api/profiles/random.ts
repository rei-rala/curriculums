import type { NextApiRequest, NextApiResponse } from "next";

import path from "path";
import { promises as fs } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ profiles: IProfilePartial[]}>
) {
  let profiles: IProfilePartial[];

  try {
    const jsonDirectory = path.join(process.cwd(), "public", "data");
    const fileContents = await fs.readFile(jsonDirectory + '/sample.json', 'utf8');
    const json = JSON.parse(fileContents);

    profiles = json.map((p: IProfile) => {
      return {
        id: p.id,
        name: p.personal.name,
        surname: p.personal.surname,
        alias: p.contact.alias,
        about: p.about,
        photo: p.personal.photo,
      };
    });

  } catch (e) {
    console.error(`Error in random:\n\t`+e);
    profiles = [];
  }

  res.status(200).json({ profiles });
}
