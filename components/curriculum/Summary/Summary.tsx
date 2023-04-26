import React from "react";

import SummaryPhoto from "./SummaryPhoto/SummaryPhoto";
import SummaryPersonalInfo from "./SummaryPersonalInfo/SummaryPersonalInfo";
import SummaryAccordion from "./SummaryAccordion/SummaryAccordion";
import SectionsMobile from "./SectionsMobile/SectionsMobile";

import styles from "./Summary.module.css";

function sortSections(sections: string[]) {
  const sortOrder: { [key: string]: number } = {
    about: 1,
    experience: 2,
    certifications: 3,
    skills: 4,
    strengths: 5,
    languages: 6,
  };

  return sections
    .map((section) => ({ section, position: sortOrder[section] }))
    .sort((a, b) => a.position - b.position)
    .map((item) => item.section);
}

interface ISummaryProps {
  personal: Personal;
  contact: Contact;
  sections: string[];
}

const Summary: ExtendedFC<ISummaryProps> = ({ personal, contact, sections }) => {
  const sortedSections = sortSections(sections);

  return (
    <>
      <div draggable className={`row ${styles.summaryUpper}`}>
        {
          !!personal.photo && <div className={`
              col-5 col-md-12 col-xl-5
              d-flex justify-content-center align-content-center
            `}>
            <SummaryPhoto personal={personal} />
          </div>
        }
        <div className={`
                ${personal.photo ? "col-7 col-md-12 col-xl-7" : "col"}
                d-flex flex-column justify-content-center align-content-center gap-1 
                ${styles.summaryPersonalInfo}
        `}>
          <SummaryPersonalInfo personal={personal} contact={contact} />
        </div>
      </div>
      <div className={`d-none d-lg-block ${styles.summaryLower}`}>
        <SummaryAccordion sections={sortedSections} />
      </div>

      <div className={`d-lg-none ${styles.summarySectionsBtnMobile}`}>
        <SectionsMobile title={`${personal.name} ${personal.surname}`} badge={contact.alias} list={sortedSections} footer={contact} />
      </div>
    </>
  );
};

export default Summary;
