import React from "react";

const About: CurriculumFC = ({ about }) => {
  if (!Boolean(about)) return null;

  return (
    <article>
      <h3 id="about">About</h3>
      <div>
        <p>
          {about}
        </p>
      </div>
    </article>
  );
};

export default About;
