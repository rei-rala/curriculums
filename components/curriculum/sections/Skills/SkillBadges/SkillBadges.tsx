import React from "react";

import { Badge } from "react-bootstrap";

import styles from './SkillBadges.module.css'
import { InView } from "react-intersection-observer";

const SkillBadges: CurriculumFC = ({ skills }) => {
  return (
    <ul className={styles.badgeList}>
      {skills?.map((s, i) => (
        <InView key={s.title}>
          {({ inView, ref }) => (
            <li
              ref={ref}
              className={`
                ${styles.badge}
                ${inView ? styles.show : styles.hide}
              `}
              style={{ animationDelay: 0.1 + i / 10 + 's' }}
            >
              <Badge>{s.title} </Badge>
            </li>
          )}
        </InView>
      ))}
    </ul>
  );
};

export default SkillBadges;