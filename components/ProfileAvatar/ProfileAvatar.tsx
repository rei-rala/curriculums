import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import styles from "./ProfileAvatar.module.css";

const BaseAvatar = (props: any) => {
  const { profile, width, height, altText, iconClass, fill } = props;

  return (
    <div className={styles.avatarContainer}>
      {profile?.photo
        ? <Image
          fill={fill || false}
          width={!fill && (width || 30)}
          height={!fill && (height || 30)}
          src={profile.photo}
          alt={altText ? altText : `Foto de ${profile.alias}`}
          placeholder="blur"
          blurDataURL={profile.photo}
        />
        : <FontAwesomeIcon
            className={`ratio ratio-1x1 ${styles.altIcon} ${iconClass || ""}`}
            icon={faUser}
            width={width || 30}
            height={height || 30}
          />
      }
    </div>
  );
};

export const ProfileAvatar = (props: any) => {
  return <BaseAvatar {...props} />;
};

export default ProfileAvatar;
