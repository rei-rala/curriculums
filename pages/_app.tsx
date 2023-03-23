import type { AppProps } from "next/app";

import Layout from "@/layouts/Layout";
import "@/styles/reset.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
