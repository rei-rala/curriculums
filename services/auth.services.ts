import { getUrlFromClient } from "@/utils";
import axios, { AxiosRequestConfig } from "axios";

export async function loginWithCredentials(creds: Credentials) {
  let url = getUrlFromClient();

  const options: AxiosRequestConfig = {
    method: "post",
    baseURL: `${url}/api`,
    url: `auth/login`,
    data: creds,
  };

  return (await axios<{ user: IUser }>(options))?.data;
}
