import React from "react";
import Link from "next/link";

import { ProfileAvatar } from "../ProfileAvatar/ProfileAvatar";

import styles from "./ProfileCard.module.css";

interface IProfileCardProps {
  avatarProfile?: IProfile | IProfilePartial;
  header?: string | JSX.Element;
  subHeader?: string | JSX.Element;
  body?: string | JSX.Element;
  footerLink?: string | URL;
  footerText?: string | JSX.Element;
}

// Solucion con clases bootstrap
const ProfileCard: React.FC<IProfileCardProps> = ({ avatarProfile, header, subHeader, body, footerLink, footerText }) => {
  return (
    <div className={`card text-center col-sm-12 col-md-5 col-xl-3 border-0 ${styles.profileCard} ${styles.profileCardDefault}`} draggable>
      <div className="card-header row d-flex justify-content-center align-items-center">
        {
          !!avatarProfile &&
          <div className={`col-3 ${styles.profileCardImg}`}>
            <ProfileAvatar profile={avatarProfile} width={200} height={200} iconScale={2} />
          </div>
        }

        <div className={`${avatarProfile ? "col-9" : "col"} ${styles.profileNameContainer}`}>
          <div>
            <h4 className={styles.profileCardHeader}>{header}</h4>
            <span className="display-md-none">{subHeader}</span>
          </div>
        </div>
      </div>

      <div className="card-body p-1 d-flex align-items-center">
        <span title={String(body)} className={`${styles.cardBodyText} card-text`}>{body}</span>
      </div>

      <div className="card-footer row">
        <Link
          href={footerLink || "#"}
          className="btn btn-primary col-sm-6 col-md-8 col-lg-6 m-auto"
        >
          {footerText || "Visitar"}
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
