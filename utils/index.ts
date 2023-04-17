import { IncomingMessage } from "http";

export const IS_SERVER = typeof window === "undefined";
export function getProtocol() {
  const isProd = process.env.VERCEL_ENV === "production";
  if (isProd) return "https://";
  return "http://";
}

export function getHostFromRequest(request: IncomingMessage) {
  let protocol = getProtocol();
  let host = request.headers.host;

  return protocol + host;
}

export function getUrlFromClient() {
  if (IS_SERVER) return "";

  return window.location.origin;
}

type EmailPart = "name" | "domain" | "organization";

export function getMailPartsFromStr(str: string, part: EmailPart = "domain") {
  try {
    let [name, domain] = str.split("@");

    if (part === "name") return name;
    if (part === "domain") return domain;
    if (part === "organization") return domain.split(".")[0];
  } catch {
    return "";
  }
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
