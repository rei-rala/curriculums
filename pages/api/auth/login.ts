import type { NextApiRequest, NextApiResponse } from "next";

import path from "path";
import { promises as fs } from "fs";

import bcrypt from "bcrypt";
const saltRounds = 10;

type LoginRequest = NextApiRequest & {
  email: string;
  password: string;
};

export default async function handler(
  req: LoginRequest,
  res: NextApiResponse<{
    message: string;
    user?: IUser;
  }>
) {
  let message = "successful login";
  let status = 200;
  let user: IUser | undefined;

  try {
    if (req.method?.toUpperCase() !== "POST") {
      throw {
        message: "Method not allowed",
        status: 405,
      };
    }

    let { email, password, userType } = req.body;
    email = email?.replace(/\s/g, "").toLowerCase();

    if (!email || !password || !userType) {
      throw {
        message: "Faltaron uno o mas datos",
        status: 400,
      };
    }

    const jsonDirectory = path.join(process.cwd(), "public", "data");
    const fileContents = await fs.readFile(
      jsonDirectory + "/highlySecureDb.json",
      "utf8"
    );
    const json: IUser[] = JSON.parse(fileContents);

    let hashedPw = bcrypt.hashSync(password, saltRounds);

    user = json.find((u) => {
      let upw = u.password;

      console.log({
        upw,
        hashedPw,
      });

      return u.email === email && u.userType === userType && bcrypt.compare(hashedPw, u.password ?? "")
    });

    if (!user) {
      throw {
        message: "Usuario, contraseña o rol incorrecto. Verifica los datos ingresados.",
        status: 401,
      };
    }

    delete user.password;
  } catch (e: any) {
    status = e.status ?? 500;
    message = e.message ?? "Unexpected error";
    console.error(`Error in login:\n\t` + e.toString());
  }

  res.status(status).json({
    message,
    user,
  });
}
