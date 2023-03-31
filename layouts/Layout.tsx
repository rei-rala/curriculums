import React from "react";
import Head from "next/head";

import Navbar from "./Navbar/Navbar";
import PageHead from "./PageHead/PageHead";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

import { useRouter } from "next/router";
import { TransitionGroup } from "react-transition-group";

const Layout: DefaultFC = ({ children, className }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Curriculums</title>
      </Head>
      <div className={className}>
        <TransitionGroup>
          <Navbar />
          <PageHead routerAsPath={router.asPath} />
          <Content>{children}</Content>
          <Footer />
        </TransitionGroup>
      </div>
    </>
  );
};

export default Layout;
