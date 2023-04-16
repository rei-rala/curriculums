import React from "react";
import Head from "next/head";

import Navbar from "./Navbar/Navbar";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

import { useRouter } from "next/router";

const Layout: DefaultFC = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Curriculums</title>
      </Head>
      <div className="container">
        <Navbar />
        <BreadCrumbs routerAsPath={router.asPath} />
        <Content>{children}</Content>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
