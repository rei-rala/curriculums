import React from "react";

const Languages: CurriculumFC = ({ languages }) => {
  if (!languages || languages.length === 0) return null;

  return (
    <article id="languages">
      <h3>Languages</h3>

      <div>
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
    </article>
  );
};

export default Languages;
