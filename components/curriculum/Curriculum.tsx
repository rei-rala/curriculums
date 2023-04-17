// Summary

import { useMemo, useRef } from "react";
import Personal from "./Personal/Personal";
import Summary from "./Summary/Summary";

import styles from './Curriculum.module.css'

const Curriculum: CurriculumComponent = ({ profile }) => {
  const leftSideRef = useRef(null)

  const {
    personal,
    strengths,
    contact,
    languages,
    certifications,
    experience,
    skills,
  } = profile;

  // getting sections and removing id and personal
  const sections = useMemo(() => Object.keys(profile).filter(s => s !== "id" && s !== "personal"), [profile]);

  return (
    <div className="container px-0 mx-auto row">
      <div
        ref={leftSideRef}
        className={`col-sm-12 col-md-5 col-xl-4 position-lg-fixed  ${styles.curriculumLeft}`}
      >
        <Summary personal={personal} contact={contact} sections={sections} />
      </div>

      <div className={`col-sm-12 col-md-7 col-xl-8 ml-auto pl-5 ${styles.curriculumRight}`}>
        <Personal personal={personal} />
        <hr />

        <div>
          <h3 id={'strengths'}>Strengths</h3>
          <ul>
            {strengths.map((s) => (
              <li key={s.title}>
                <p>
                  <b>{s.title}:</b> {s.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 id={'certifications'}>Certifications</h3>
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
        </div>

        <div>
          <h3>Languages</h3>

          <ul>
            {languages.map((l) => (
              <li key={l.name}>
                <p>
                  <b>{l.name}</b>: {l.level}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Skills</h3>
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
        </div>

        {/*  asd */}
        <div>
          <h3 id={'strengths'}>Strengths</h3>
          <ul>
            {strengths.map((s) => (
              <li key={s.title}>
                <p>
                  <b>{s.title}:</b> {s.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 id={'certifications'}>Certifications</h3>
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
        </div>

        <div>
          <h3>Languages</h3>

          <ul>
            {languages.map((l) => (
              <li key={l.name}>
                <p>
                  <b>{l.name}</b>: {l.level}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Skills</h3>
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
        </div>
      </div >
    </div>

  );
};

export default Curriculum;