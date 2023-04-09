import React from "react";
import Head from "next/head";

import Navbar from "./Navbar/Navbar";
import PageHead from "./PageHead/PageHead";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

import { useRouter } from "next/router";

const Layout: DefaultFC = ({ children, className }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Curriculums</title>
      </Head>
      <div className={className}>
        <Navbar />
        <PageHead routerAsPath={router.asPath} />
        <Content>{children}</Content>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
