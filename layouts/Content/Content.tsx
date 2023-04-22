import React from "react";

import styles from "./Content.module.css";

const Content: DefaultFC = ({ children }) => {
  return (
    <div className={`row p-3 ${styles.contentWrapper}`}>
				{children}
    </div>
  );
};

export default Content;
