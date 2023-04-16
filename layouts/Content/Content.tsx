import React from "react";

import styles from "./Content.module.css";

const Content: DefaultFC = ({ children }) => {
  return (
    <div className={`row px-1 py-2 ${styles.contentWrapper}`}>
				{children}
    </div>
  );
};

export default Content;
