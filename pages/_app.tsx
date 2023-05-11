import type { AppProps } from "next/app";

import { config } from '@fortawesome/fontawesome-svg-core'
import Layout from "@layouts/Layout";

import 'bootstrap/dist/css/bootstrap.min.css';
import "@styles/reset.css";
import "@styles/globals.css";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { UserContext } from "@/contexts/UserContext";
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <UserContext>
        <Component {...pageProps} />
      </UserContext>
    </Layout>
  );
}
