import React from "react";
import { IProfile } from "../../../types";

const Personal: ExtendedFC<{ personal: IProfile }> = (props) => {
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
