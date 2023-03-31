import React, { useEffect, useState } from "react";

import styles from "./Footer.module.css";

const Footer: DefaultFC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span>Footer</span>
      </div>
    </footer>
  );
};

export default Footer;
