import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const BaseAvatar = (props: any) => {
  return (
    <div
      className="rounded-circle shadow-4"
      {...props}
    >
      {
        props.image
          ? <Image src={props.image} alt={`Foto de ${props.alias}`} />
          :
          <FontAwesomeIcon
            className={`ratio ratio-1x1 m-auto ${props.iconClass || ""}`}
            icon={faUser}
            width={props.width || 20}
            height={props.height || 20}
          />
      }
    </div>
  );
};

export const ProfileAvatar = (props: any) => {
  return <BaseAvatar {...props} />;
};

export default ProfileAvatar;
