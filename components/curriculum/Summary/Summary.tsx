import React, { useState } from "react";

import styles from "./Summary.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import { getMailFromStr } from "@/utils";
import AccordionMobile from "./AccordionMobile/AccordionMobile";
import Link from "next/link";

const Summary: ExtendedFC<{
  personal: Personal;
  contact: Contact;
  sections: string[];
}> = ({ personal, contact, sections }) => {
  // checking active section
  const [activeSection, setActiveSection] = useState(sections[0]);


  return (
    <div className={styles.summaryContainer}>
      <div className={`mx-1 row ${styles.summaryUpper}`}>
        <div className="col-5 d-flex align-content-center">
          <div className={styles.summaryPhoto}>
            {personal.photo && <Image src={personal.photo} alt="wtf" width={500} height={500} />}
          </div>
        </div>
        <div className={`col-7 text-center d-flex flex-column justify-content-center gap-1 align-content-center ${styles.summaryPersonalInfo}`}>
          <h3>{personal.name} {personal.surname}</h3>
          <Badge bg="secondary" className="col-8 mx-auto" pill>{contact.alias}</Badge>

          {
            personal.location && <p>
              <FontAwesomeIcon icon={faLocationDot} /> {personal.location}
            </p>
          }

          {
            contact.phone && <p>
              <FontAwesomeIcon icon={faPhone} /> {contact.phone}
            </p>
          }

          {
            contact.email && <p>
              <FontAwesomeIcon icon={faEnvelope} /> {" "}
              <Link href={`mailto:${contact.email}`}>
                <span className="d-md-none d-sm-inline">{getMailFromStr(contact.email)}</span>
                <span className="d-sm-none d-md-inline">{contact.email}</span>
              </Link>
            </p>
          }

          {
            personal.linkedin && <p>
              <FontAwesomeIcon scale={1} icon={faLinkedin} /> {" "}
              <Link href={personal.linkedin} referrerPolicy="no-referrer" target={"_blank"}>
                LinkedIn
              </Link>
            </p>
          }
        </div>
      </div>

      <div className={`col-6 mx-auto row text-center ${styles.summaryLower}`}>
        <AccordionMobile sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
    </div>
  );
};

export default Summary;