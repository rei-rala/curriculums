import React from "react";

const About: ExtendedFC<{ about: string }> = ({ about }) => {
  return (
    <article>
      <h3 id="about">About</h3>
      <div>{about}</div>
    </article>
  );
};

export default About;
