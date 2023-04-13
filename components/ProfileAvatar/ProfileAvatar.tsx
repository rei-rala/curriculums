import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import styles from "./ProfileAvatar.module.css";

const BaseAvatar = (props: any) => {
  const { profile, width, height, altText, iconClass } = props;

  return (
    <div
      data-toggle={altText ? "tooltip" : ""}
      data-placement="top"
      title={profile?.alias ? `${profile?.alias} no ha proporcionado foto` : ""}
    >
      {profile?.photo
        ? <Image
          width={width || 30}
          height={height || 30}
          src={profile.photo}
          alt={`Foto de ${profile.alias}`}
        />
        : <FontAwesomeIcon
          className={`ratio ratio-1x1 ${styles.icon} ${iconClass || ""}`}
          icon={faUser}
          width={width || 30}
          height={height || 30}
          data-toggle={altText ? "tooltip" : ""}
          data-placement="top"
        />
      }
    </div>
  );
};

export const ProfileAvatar = (props: any) => {
  return <BaseAvatar {...props} />;
};

export default ProfileAvatar;
