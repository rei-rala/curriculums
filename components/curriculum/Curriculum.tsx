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

const Curriculum: CurriculumComponent = ({ profile }) => {
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
        className={`col-sm-12 col-md-7 col-xl-8 d-flex flex-column ${styles.curriculumRight}`}
      >
        {Boolean(about) && <AboutComp about={about} />}
        {Boolean(experience.length) && <ExperienceComp experience={experience} />}
        {Boolean(certifications.length) && <CertificationsComp certifications={certifications} />}
        {Boolean(skills.length) && <SkillsComp skills={skills} />}
        {Boolean(strengths.length) && <StrenghtsComp strengths={strengths} />}
        {Boolean(languages.length) && <LanguagesComp languages={languages} />}
      </section>
    </div>
  );
};

export default Curriculum;
