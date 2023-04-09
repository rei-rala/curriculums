import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const BaseAvatar = (props: any) => {
  return (
    <div
      className="rounded-circle shadow-4"
      {...props}
    >
      <FontAwesomeIcon
        icon={faUser}
        width={props.width || 20}
        height={props.height || 20}
      />
    </div>
  );
};

export const ProfileAvatar = (props: any) => {
  return <BaseAvatar {...props} />;
};

export default ProfileAvatar;
