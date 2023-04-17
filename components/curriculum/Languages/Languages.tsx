import React from "react";

const Languages: ExtendedFC<{ languages: Language[] }> = ({ languages }) => {
  return (
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
  );
};

export default Languages;
