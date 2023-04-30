import React from "react";
import Image from "next/image";

import styles from './SummaryPhoto.module.css'

const SummaryPhoto: CurriculumFC = ({ personal }) => {
  if (!personal) return null;

  return (
    !personal.photo
      ? null
      : (
        <div className={styles.summaryPhoto}>
          <Image
            className="border border-2"
            priority={true}
            src={personal.photo}
            alt={personal.name}
            width={500}
            height={500}
            draggable={false}
          />
        </div>
      )
  );
};

export default SummaryPhoto;