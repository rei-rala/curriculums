import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import VisibilitySensor from "react-visibility-sensor";

import styles from "./Strenghts.module.css";

const Strenghts: CurriculumFC = ({ strengths }) => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  function onVisibilityChange(isVisible: boolean, title: string) {
    if (isVisible) {
      setVisibleItems(prevVisibleItems => [...prevVisibleItems, title]);
    } 
    // *else* statement will hide the items when they are not visible
    else {
      setVisibleItems(prevVisibleItems => prevVisibleItems.filter(prevTitles => prevTitles !== title));
    }
  }

  if (!strengths || strengths.length === 0) return null;

  return (
    <article id="strengths" className={styles.container}>
      <h3>Strengths</h3>
      <div>
        <ul className={styles.strenghtsList}>
          {strengths.map((strength, index) => (
            <VisibilitySensor
              key={index}
              onChange={(isVisible: boolean) => onVisibilityChange(isVisible, strength.title)}
            >
              <CSSTransition
                in={visibleItems.includes(strength.title)}
                classNames={styles}
                timeout={500}

              >
                <li>
                  {index !== 0 && <hr />}
                  <h4>{strength.title}</h4>
                  <p>{strength.description}</p>
                </li>
              </CSSTransition>
            </VisibilitySensor>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Strenghts;
