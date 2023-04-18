import React from "react";

const Certifications: ExtendedFC<{ certifications: Certification[] }> = ({
  certifications,
}) => {
  return (
    <article>
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
    </article>
  );
};

export default Certifications;
