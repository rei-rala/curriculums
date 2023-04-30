import React from "react";
import { InView } from "react-intersection-observer";

import styles from "./StrengthItem.module.css";

const StrengthItem: ExtendedFC<{ strength: Strength, children?: JSX.Element }> = ({ strength, children }) => {

  return (
    <InView>
      {({ inView, ref }) => (
        <li ref={ref} className={`
          ${styles.strengthItem}
          ${inView ? styles.show : styles.hide}
        `}>
          <h4>{strength.title}</h4>
          <p>{strength.description}</p>
          {children}
        </li>
      )}
    </InView>
  )
};

export default StrengthItem;