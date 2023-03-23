import React from "react";

import styles from "./Content.module.css";

const Content: DefaultFC = ({ children }) => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentInner}>
				{children}
			</div>
    </div>
  );
};

export default Content;
