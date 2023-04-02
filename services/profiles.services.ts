import { getUrlFromClient } from "@/utils";
import axios, { AxiosRequestConfig } from "axios";

export async function getProfileByAlias(alias: string): Promise<IProfile | null> {
  let url = getUrlFromClient();

  const options: AxiosRequestConfig = {
    method: "get",
    baseURL: `${url}/api`,
    url: `profiles/alias/${alias}`,
  };

  try {
    let { data } = await axios<{ profile: IProfile }>(options);
    return data.profile;
  } catch {
    return null;
  }
}