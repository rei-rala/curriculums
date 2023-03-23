import React from "react";

const Personal: ExtendedFC<{ personal: Profile }> = (props) => {
  const { name, surname, about } = props.personal;

  return (
    <div>
      <h1>
        {name} {surname}
      </h1>
      <hr />
      <div>{about}</div>
    </div>
  );
};

export default Personal;
