// Summary
import { useMemo, useRef } from "react";

import {
  About as AboutComp,
  Certifications as CertificationsComp,
  Experience as ExperienceComp,
  Languages as LanguagesComp,
  Strenghts as StrenghtsComp,
  Skills as SkillsComp,
  Summary as SummaryComp,
} from "@components/curriculum";

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

  // getting sections and removing id and personal
  const sections = useMemo(
    () =>
      Object.keys(profile).filter(
        (s) => s !== "id" && s !== "personal" && s !== "contact"
      ),
    [profile]
  );

  return (
    <div className={`container px-0 mx-auto row ${styles.curriculumContainer}`}>
      <div
        ref={leftSideRef}
        className={`col-sm-12 col-md-5 col-xl-4 ${styles.curriculumLeft}`}
      >
        <SummaryComp
          personal={personal}
          contact={contact}
          sections={sections}
        />
      </div>

      <section
        className={`
          col-sm-12 col-md-7 col-xl-8
          d-flex flex-column
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
