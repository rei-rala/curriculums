import React from "react";

import styles from "./ProfileCard.module.css";

const ProfileCardSkeleton = () => {
  return (
    <div className="card col-12 col-md-5 m-1">
      <div className="card-body row">
        
        <div className={`col-3 placeholder-glow ${styles.profileCardImg}`}>
          <div className="placeholder"></div>
        </div>

        <div className="col-9">
          <div className="card-title placeholder-glow col d-flex gap-1 justify-content-space-between">
              <h1 className="col-5 placeholder"></h1>
              <h1 className="col-3 placeholder"></h1>
              <h1 className="col-4 placeholder"></h1>
          </div>

          <div className="row d-flex gap-1 p-2 card-text placeholder-glow justify-content-center">
            <span className="placeholder col-3"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-3"></span>
            <span className="placeholder col-2"></span>
            <span className="placeholder col-2"></span>
          </div>

        </div>
      </div>

      <div className="card-footer placeholder-glow row">
        <a href="#" className="btn btn-primary disabled placeholder col-6 m-auto"></a>
      </div>
    </div>
  );
}

export default ProfileCardSkeleton;