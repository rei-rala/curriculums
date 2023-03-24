import React from "react";

const Personal: ExtendedFC<{ personal: Personal }> = ({ personal }) => {
  const { name, surname, about } = personal;

  return (
    <div>
      <h1>
        {name} {surname}
      </h1>
      <div>{about}</div>
    </div>
  );
};

export default Personal;
