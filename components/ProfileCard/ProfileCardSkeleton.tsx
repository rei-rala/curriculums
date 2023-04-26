import React from "react";

import styles from "./ProfileCard.module.css";

// Solucion con clases bootstrap
const ProfileCardSkeleton = () => {
  return (
    <div className={`card col-sm-12 col-md-5 col-xl-3 border-0 ${styles.profileCardDefault}`}>
      <div className="card-header row d-flex justify-content-center align-items-center">
        <div className={`col-3 placeholder-glow ${styles.profileCardImg}`}>
          <div className="placeholder"></div>
        </div>

        <div className="col-9 display-grid place-items-center">
          <h2 className="mx-auto card-title placeholder-glow d-flex justify-content-center align-items-center gap-1">
            <span className="col-3 placeholder"></span>
            <span className="col-4 placeholder"></span>
            <span className="col-2 placeholder"></span>
          </h2>
        </div>
      </div>

      <div className="card-body row d-flex gap-2 p-3 placeholder-glow justify-content-center">
        <span className="placeholder col-3"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-3"></span>
        <span className="placeholder col-2"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-3"></span>
        <span className="placeholder col-2"></span>
        <span className="placeholder col-2"></span>
      </div>

      <div className="card-footer row placeholder-glow text-center">
        <a
          href="#"
          className="disabled placeholder btn btn-primary col-sm-6 col-md-8 col-lg-6 m-auto"
        ></a>
      </div>
    </div>
  );
};

export default ProfileCardSkeleton;
