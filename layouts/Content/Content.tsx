import React from "react";

import styles from "./Content.module.css";

const Content: DefaultFC = ({ children }) => {
  return (
    <div className={`container ${styles.contentWrapper}`}>
      <div className={`row d-flex justify-content-center ${styles.contentInner}`}>
				{children}
			</div>
    </div>
  );
};

export default Content;
