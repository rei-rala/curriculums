import React from "react";

const Skills: CurriculumFC = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <article>
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
    </article>
  );
};

export default Skills;
