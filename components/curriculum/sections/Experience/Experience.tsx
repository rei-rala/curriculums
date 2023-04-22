import React, { useMemo } from "react";
import ExperienceLineComponent from "./ExperienceLine/ExperienceLine";


function sortExperienceByDate(experience: Experience[]): Experience[] {
  return experience.sort((a, b) => {
    if (a.from > b.from) return -1;
    if (a.from == b.from && a.to > b.to) return -1;
    return 0;
  });
}


const ExperienceComponent: CurriculumFC = ({ experience }) => {
  let experienceSortedByDate = useMemo(() => sortExperienceByDate(experience!), [experience])
  
  if (!experienceSortedByDate || experienceSortedByDate.length === 0) return null;

  return (
    <article>
      <h3 id="experience">Experience</h3>
      <ul>
        {
          experienceSortedByDate.map((e, i) => <ExperienceLineComponent key={`exp${i}`} experience={e} />)
        }
      </ul>
    </article>
  );
};

export default ExperienceComponent;