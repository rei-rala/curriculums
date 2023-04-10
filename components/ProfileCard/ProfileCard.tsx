import React from "react";
import Link from "next/link";

import { ProfileAvatar } from "../ProfileAvatar/ProfileAvatar";

import styles from "./ProfileCard.module.css";

const ProfileCard: React.FC<{ profile?: IProfilePartial }> = ({ profile }) => {
  if (!profile)
    return null

  return (

    <div className="card col-12 col-md-5 m-1">
      <div className="card-body">

        <div className="card-title text-center">
          <h1>{profile.name}</h1>
        </div>

        <div>
          <div className={`col-3 ratio ratio-1x1 ${styles.profileCardImg}`}>
            <ProfileAvatar
              className="fa-3x"
              width={30}
              height={30}
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
            />
          </div>

          <div className="col-9 card-text text-center">
            <span>{profile.about}</span>
          </div>

        </div>
      </div>

      <div className="card-footer row">
        <Link href={`/cv/${profile.alias}`} className="btn btn-primary col-6 m-auto">Visitar perfil</Link>
      </div>
    </div>


  );
};

export default ProfileCard;
