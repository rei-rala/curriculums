import React, { lazy, useMemo } from "react";

import { VerticalTimeline } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import styles from './WorkExperience.module.css'
import { sortBackgroundByDate } from "@/utils";



const WorkExperienceLineComp = lazy(() => import('./WorkExperienceLine/WorkExperienceLine'))

const WorkExperienceComp: CurriculumFC = ({ workExperience }) => {
  let experienceSortedByDate = useMemo(() => sortBackgroundByDate(workExperience) as WorkExperience[], [workExperience])

  if (!experienceSortedByDate || experienceSortedByDate.length === 0) return null;

  return (
    <article id="workExperience" className={styles.container}>
      <h3>Work Experience</h3>

      <div>
        <VerticalTimeline lineColor="var(--color)" layout="1-column-right">
          <div className={styles.fadeTop}></div>
          {
            experienceSortedByDate.map((workExperience, index) => (
              <WorkExperienceLineComp
                key={index}
                workExperience={workExperience} />
            ))
          }
          <div className={styles.fadeBottom}></div>
        </VerticalTimeline>
      </div>
    </article>
  );
};

export default WorkExperienceComp;
