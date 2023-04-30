import React, { lazy, useMemo } from "react";

import { VerticalTimeline } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import styles from './Experience.module.css'

function sortExperienceByDate(experience: Experience[]): Experience[] {
  return experience.sort((a, b) => {
    if (a.from > b.from) return -1;
    if (a.from == b.from && a.to > b.to) return -1;
    return 0;
  });
}

const ExperienceLine = lazy(() => import('./ExperienceLine/ExperienceLine'))

const ExperienceComponent: CurriculumFC = ({ experience }) => {
  let experienceSortedByDate = useMemo(() => sortExperienceByDate(experience!), [experience])

  if (!experienceSortedByDate || experienceSortedByDate.length === 0) return null;

  return (
    <article className={styles.container}>
      <h3 id="experience"> Experience</h3>
      <VerticalTimeline lineColor="var(--color)" layout="1-column-right">
        <div className={styles.fadeTop}></div>
        {
          experienceSortedByDate.map((experience, index) => (
            <ExperienceLine
              key={index}
              experience={experience} />
          ))
        }
        <div className={styles.fadeBottom}></div>
      </VerticalTimeline>
    </article>
  );
};

export default ExperienceComponent;