import React from "react";

const AcademicBackground: CurriculumFC = ({ academicBackground }) => {
  if (!academicBackground || academicBackground.length === 0) return null;
  return (
    <article>
      <h3 id="academicBackground">Academic Background</h3>
      <ul>
        {academicBackground.map((c, i) => (
          <li key={c.institution + c.year + i}>
            <p>{c.title}</p>
            <p>
              {c.institution} - {c.year}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default AcademicBackground;
