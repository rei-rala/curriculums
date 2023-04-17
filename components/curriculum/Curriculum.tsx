// Summary

import { useMemo, useRef } from "react";

import { About, Summary } from "@components/curriculum";

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
        <Summary personal={personal} contact={contact} sections={sections} />
      </div>
      <div className={`col-sm-12 col-md-7 col-xl-8 d-flex flex-column ${styles.curriculumRight}`}>
        {about && <About about={about} />}

        <section>
          <h3 id="strengths">Strengths</h3>
          <ul>
            {strengths.map((s) => (
              <li key={s.title}>
                <p>
                  <b>{s.title}:</b> {s.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 id="experience">Experience</h3>
          {experience.map((e) => (
            <div key={`${e.employer}:${e.from}-${e.to}`}>
              <b>{e.position}</b>
              <i>{e.employer}</i>
              <p>
                {new Date(e.from).toLocaleDateString()} -{" "}
                {new Date(e.to).toLocaleDateString()}
              </p>
            </div>
          ))}
        </section>

        <section>
          <h3 id="certifications">Certifications</h3>
          <ul>
            {certifications.map((c, i) => (
              <li key={c.institution + c.year + i}>
                <p>{c.title}</p>
                <p>
                  {c.institution} - {c.year}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 id="languages">Languages</h3>

          <ul>
            {languages.map((l) => (
              <li key={l.name}>
                <p>
                  <b>{l.name}</b>: {l.level}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 id="skills">Skills</h3>
          <ul>
            {skills
              .sort((a, b) => (a.kind > b.kind ? 1 : -1))
              .map((s) => (
                <li key={s.kind + s.title}>
                  <p>
                    <b>{s.kind}</b>: {s.title}
                  </p>
                </li>
              ))}
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Curriculum;
