import React from "react";

const About: CurriculumFC = ({ about }) => {
  if (!Boolean(about)) return null;

  return (
    <article id="about">
      <h3>About</h3>
      <div>
        <p>
          {about}
        </p>
      </div>
    </article>
  );
};

export default About;
