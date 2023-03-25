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
