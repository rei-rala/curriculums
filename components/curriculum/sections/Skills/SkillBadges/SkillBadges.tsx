import React from "react";

import { Badge } from "react-bootstrap";

import styles from './SkillBadges.module.css'

const SkillBadges: CurriculumFC = ({ skills }) => {
  return (
    <ul className={styles.badgeList}>
      {skills?.map((s) => (
        <li key={s.kind + s.title}>
          <Badge>{s.title} </Badge>
        </li>
      ))}
    </ul>
  );
};

export default SkillBadges;