import React from "react";

const Strenghts: CurriculumFC = ({ strengths }) => {
  if (!strengths || strengths.length === 0) return null;

  return (
    <article id="strengths">
      <h3>Strengths</h3>
      <div>
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
    </article>
  );
};

export default Strenghts;
