import React from "react";
import AcademicBackgroundComp from "./AcademicBackground/AcademicBackground";
import WorkExperienceComp from "./WorkExperience/WorkExperience";

import 'react-vertical-timeline-component/style.min.css';

const BackgroundWrapperComp: CurriculumFC = ({ academicBackground, workExperience }) => {
  return (
    <>
      <AcademicBackgroundComp academicBackground={academicBackground} />
      <WorkExperienceComp workExperience={workExperience} />
    </>
  );
};

export default BackgroundWrapperComp;