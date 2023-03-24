import React from "react";

import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import PageHead from "@/layouts/PageHead/PageHead";
import Head from "next/head";

const Layout: DefaultFC = ({ children, className }) => {
  return (
    <>
      <Head>
        <title>Curriculums</title>
      </Head>
      <div className={className}>
        <Navbar />
        <PageHead />
        <Content>{children}</Content>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
