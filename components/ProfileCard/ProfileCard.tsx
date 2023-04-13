import React from "react";
import Link from "next/link";

import { ProfileAvatar } from "../ProfileAvatar/ProfileAvatar";

import styles from "./ProfileCard.module.css";

const ProfileCard: React.FC<{ profile?: IProfilePartial }> = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="card text-center col-sm-12 col-md-5">
      <div className="card-header row d-flex justify-content-center align-items-center">
        <div className={`col-3 ${styles.profileCardImg}`}>
          <ProfileAvatar width={100} height={100} profile={profile} />
        </div>

        <div className={`col-9 {styles.profileNameContainer}`}>
          <div>
            <h2 className={styles.profileName}>{profile.name}</h2>
          </div>
        </div>
      </div>

      <div className="card-body">
        <span className="card-text">{profile.about}</span>
      </div>

      <div className="card-footer row">
        <Link
          href={`/cv/${profile.alias}`}
          className="btn btn-primary col-6 m-auto"
        >
          Visitar perfil
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
