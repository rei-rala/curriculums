import React from "react";

import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const Layout: DefaultFC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
