import React from "react";

const StrenghtsComponent: ExtendedFC<{ strengths: Strength[] }> = ({ strengths }) => {
  return (
    <article>
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
    </article>
  );
};

export default StrenghtsComponent