import React from "react";

import styles from "./Footer.module.css";

const Footer: DefaultFC = () => {
  return (
    <div className={"container " + styles.footerContainer}>
      <footer className={styles.footerInner}>
        <span>Footer</span>
      </footer>
    </div>
  );
};

export default Footer;
