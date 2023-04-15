import React from "react";

import styles from "./Footer.module.css";

const Footer: DefaultFC = () => {
  return (
    <footer className={`row px-1 ${styles.footerContainer}`}>
        <span>Footer</span>
    </footer>
  );
};

export default Footer;
