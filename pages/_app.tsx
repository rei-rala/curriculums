import type { AppProps } from "next/app";

import Layout from "@/layouts/Layout";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400'],
  subsets: ['latin'],
  preload: true,
})

import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/reset.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={roboto.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
