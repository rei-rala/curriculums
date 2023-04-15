import React from "react";
import Link from "next/link";

import { ProfileAvatar } from "../ProfileAvatar/ProfileAvatar";

import styles from "./ProfileCard.module.css";

interface IProfileCardProps {
  avatarProfile?: IProfile | IProfilePartial;
  header?: string;
  body?: string;
  footerLink?: string;
  footerText?: string;
}

// Solucion con clases bootstrap
const ProfileCard: React.FC<IProfileCardProps> = ({ avatarProfile, header, body, footerLink, footerText }) => {
  return (
    <div className={`card text-center col-sm-12 col-md-5 border-0 ${styles.profileCard}`} draggable>
      <div className="card-header row d-flex justify-content-center align-items-center">
        {
          !!avatarProfile &&
          <div className={`col-3 ${styles.profileCardImg}`}>
            <ProfileAvatar width={100} height={100} profile={avatarProfile} />
          </div>
        }

        <div className={`${avatarProfile ? "col-9" : "col"} ${styles.profileNameContainer}`}>
          <div>
            <h4 className={styles.profileCardHeader}>{header}</h4>
          </div>
        </div>
      </div>

      <div className="card-body">
        <span className="card-text">{body}</span>
      </div>

      <div className="card-footer row">
        <Link
          href={footerLink || "#"}
          className="btn btn-primary col-6 m-auto"
        >
          {footerText || "Visitar"}
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
