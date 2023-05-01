import React, { lazy, useMemo } from "react";

import { VerticalTimeline } from 'react-vertical-timeline-component';

import styles from './AcademicBackground.module.css'
import { sortBackgroundByDate } from "@/utils";


const AcademicBackgroundLineComp = lazy(() => import('./AcademicBackgroundLine/AcademicBackgroundLine'))

const AcademicBackgroundComp: CurriculumFC = ({ academicBackground }) => {
  let academicBackgroundSortedByDate = useMemo(() => sortBackgroundByDate(academicBackground) as AcademicBackground[], [academicBackground])

  if (!academicBackgroundSortedByDate || academicBackgroundSortedByDate.length === 0) return null;

  return (
    <article
      id="academicBackground"
      className={styles.container}
    >
      <h3>Academic Background</h3>

      <div>
        <VerticalTimeline lineColor="var(--color)" layout="1-column-right">
          <div className={styles.fadeTop}></div>
          {
            academicBackgroundSortedByDate.map((academicBackgroundLine, index) => (
              <AcademicBackgroundLineComp
                key={index}
                academicBackgroundLine={academicBackgroundLine} />
            ))
          }
          <div className={styles.fadeBottom}></div>
        </VerticalTimeline>
      </div>
    </article>
  );
};

export default AcademicBackgroundComp;