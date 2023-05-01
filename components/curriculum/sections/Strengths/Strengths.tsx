import React from "react";

import styles from "./Strengths.module.css";
import StrengthItem from "./StrengthItem/StrengthItem";

const Strengths: CurriculumFC = ({ strengths }) => {
  if (!strengths || strengths.length === 0) return null;

  return (
    <article id="strengths" className={styles.container}>
      <h3>Strengths</h3>
      <div>
        <ul className={styles.strengthList}>
          {strengths.map((strength, index) => (
            <StrengthItem key={strength.title} strength={strength}>
              {index !== strengths.length - 1 && (
                  <div className={styles.separator}><hr /></div>
              )}
            </StrengthItem>
          ))}
        </ul>
      </div>
    </article >
  );
};

export default Strengths;
