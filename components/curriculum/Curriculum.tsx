// Summary

import { useMemo } from "react";
import Personal from "./Personal/Personal";
import Summary from "./Summary/Summary";

const Curriculum: CurriculumComponent = ({ profile }) => {

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
  const sections = useMemo(() => (
    Object.keys(profile)
      .filter(s => s !== "id" && s !== "personal"
      )), [profile]);

  return (
    <div>
      <Summary personal={personal} contact={contact} sections={sections} />
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
    </div>
  );
};

export default Curriculum;