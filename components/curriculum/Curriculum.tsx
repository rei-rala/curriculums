import { useMemo, useRef } from "react";

import {
  About as AboutComp,
  Certifications as CertificationsComp,
  Experience as ExperienceComp,
  Languages as LanguagesComp,
  Strenghts as StrenghtsComp,
  Skills as SkillsComp,
} from "@components/curriculum/sections";

import SummaryComp from "@components/curriculum/Summary/Summary";

import styles from "./Curriculum.module.css";

const Curriculum: ExtendedFC<{ profile: IProfile }> = ({ profile }) => {
  const leftSideRef = useRef(null);

  const {
    about,
    personal,
    strengths,
    contact,
    languages,
    certifications,
    experience,
    skills,
  } = profile;

  // getting sections and removing some of them used in summary
  const sections = useMemo(
    () =>
      Object.keys(profile).filter(
        (s) => s !== "id" && s !== "personal" && s !== "contact"
      ),
    [profile]
  );

  return (
    <div className={`row`}>
      <div
        ref={leftSideRef}
        className={`
            p-0 text-center
            col-md-4 col-lg-5
            ${styles.curriculumLeft}
          `}
      >
        <SummaryComp
          personal={personal}
          contact={contact}
          sections={sections}
        />
      </div>

      <section
        className={`
          p-0
          col-md-8 col-lg-7
          d-flex flex-row flex-md-column flex-grow
          ${styles.curriculumRight}
        `}
      >
        <AboutComp about={about} />
        <ExperienceComp experience={experience} />
        <CertificationsComp certifications={certifications} />
        <SkillsComp skills={skills} />
        <StrenghtsComp strengths={strengths} />
        <LanguagesComp languages={languages} />
      </section>
    </div>
  );
};

export default Curriculum;
