import React from "react";

const About: ExtendedFC<{ about: string }> = ({ about }) => {
  return (
    <section>
      <h3 id="about">About</h3>
      <div>{about}</div>
    </section>
  );
};

export default About;
