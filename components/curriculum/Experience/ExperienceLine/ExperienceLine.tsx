import React from "react";

const ExperienceLineComponent: ExtendedFC<{ experience: Experience }> = ({ experience }) => {
  const { position, employer, from, to } = experience;

  let [fromStr, toStr] = [from.toLocaleDateString(), to.toLocaleTimeString()];

  return (
    <li>
      <p>{position}</p>
      <p><i>{employer}</i></p>
      <p>{fromStr} - {toStr}</p>
    </li>
  );
};

export default ExperienceLineComponent;
