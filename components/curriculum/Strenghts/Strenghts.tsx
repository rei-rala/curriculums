import React from "react";

const StrenghtsComponent: ExtendedFC<{ strengths: Strength[] }> = ({ strengths }) => {
  return (
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
  );
};

export default StrenghtsComponent