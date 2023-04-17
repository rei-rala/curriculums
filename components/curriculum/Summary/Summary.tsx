import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "react-bootstrap";
import SummaryAccordion from "./SummaryAccordion/SummaryAccordion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { getMailFromStr as getMailPartsFromStr } from "@/utils";

import styles from "./Summary.module.css";
import AppTooltip from "@/components/AppTooltip/AppTooltip";

interface ISummaryProps {
  personal: Personal;
  contact: Contact;
  sections: string[];
}

const Summary: ExtendedFC<ISummaryProps> = ({ personal, contact, sections }) => {
  const mobileMailRef = useRef<HTMLSpanElement>(null);
  const [showMailTooltip, setShowMailTooltip] = useState(false);

  function handleMailHover(event: React.SyntheticEvent) {
    setShowMailTooltip(event.type === "mouseenter");
  }

  return (
    <div className={styles.summaryContainer}>
      <div
        draggable
        className={`row mx-0 ${styles.summaryUpper}`}
      >
        <div className="col-5 d-flex align-content-center">
          {personal.photo && <div className={styles.summaryPhoto}>
            <Image priority={false} src={personal.photo} alt={personal.name} width={500} height={500} draggable={false} />
          </div>}
        </div>
        <div className={`px-1 py-2 text-center d-flex flex-column justify-content-center gap-1 align-content-center ${styles.summaryPersonalInfo} ${personal.photo ? "col-7" : "col-12"} `}>
          <h3>{personal.name} {personal.surname}</h3>
          <Badge bg="secondary" className="mx-auto" pill>{contact.alias}</Badge>

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
            contact.email &&
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> {" "}
              <Link href={`mailto:${contact.email}`} draggable={false}>
                <span className="d-sm-inline d-none">{contact.email}</span>
                <span className="d-sm-none d-inline"
                  ref={mobileMailRef}
                  onMouseEnter={handleMailHover}
                  onMouseLeave={handleMailHover}
                >Email: {getMailPartsFromStr(contact.email, "organization")}</span>
                <AppTooltip show={showMailTooltip} targetRef={mobileMailRef} text={contact.email} placement="bottom" />
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

      <div
        className={`col mx-auto row text-center ${styles.summaryLower}`}
        style={{}}
      >
        <SummaryAccordion sections={sections} />
      </div>
    </div>
  );
};

export default Summary;