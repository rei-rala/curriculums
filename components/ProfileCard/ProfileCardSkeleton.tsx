import React from "react";

import styles from "./ProfileCard.module.css";

// Solucion con clases bootstrap
const ProfileCardSkeleton = () => {
  return (
    <div className="card text-center col-sm-12 col-md-5 border-0">
      <div className="card-header row d-flex justify-content-center align-items-center">
        <div className={`col-3 placeholder-glow ${styles.profileCardImg}`}>
          <div className="placeholder"></div>
        </div>

        <div className="col-9 display-grid place-items-center">
          <div className="mx-auto card-title placeholder-glow d-flex justify-content-center align-items-center gap-1">
            <h2 className="col-3 placeholder"></h2>
            <h2 className="col-4 placeholder"></h2>
            <h2 className="col-2 placeholder"></h2>
          </div>
        </div>

        <div className="card-body row d-flex gap-1 p-2 card-text placeholder-glow justify-content-center">
          <span className="placeholder col-3"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-3"></span>
          <span className="placeholder col-2"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-3"></span>
          <span className="placeholder col-2"></span>
          <span className="placeholder col-2"></span>
        </div>
      </div>

      <div className="card-footer row placeholder-glow text-center">
        <a
          href="#"
          className="btn btn-primary disabled placeholder col-6 m-auto"
        ></a>
      </div>
    </div>
  );
};

export default ProfileCardSkeleton;
