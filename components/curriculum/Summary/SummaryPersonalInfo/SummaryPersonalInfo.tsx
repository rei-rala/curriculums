import React, { useRef, useState } from "react";
import Link from "next/link";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AppTooltip from "@/components/AppTooltip/AppTooltip";

import { getMailPartsFromStr } from "@/utils";

const SummaryPersonalInfo: CurriculumFC = ({ personal, contact }) => {
  const mobileMailRef = useRef<HTMLSpanElement>(null);
  const [showMailTooltip, setShowMailTooltip] = useState(false);

  function handleMailHover(event: React.SyntheticEvent) {
    setShowMailTooltip(event.type === "mouseenter");
  }

  if (!personal || !contact) return null;

  return (
    <>
      <h3>
        {personal.name} {personal.surname}
      </h3>
      <Badge bg="secondary" className="mx-auto" pill>
        {contact.alias}
      </Badge>

      {personal.location && (
        <p>
          <FontAwesomeIcon icon={faLocationDot} fill="" /> {personal.location}
        </p>
      )}

      {contact.phone && (
        <p>
          <FontAwesomeIcon icon={faPhone} fixedWidth  />
          <Link href={`tel:${contact.phone}`}>
            {contact.phone}
          </Link>
        </p>
      )}

      {contact.email && (
        <p>
          <FontAwesomeIcon icon={faEnvelope} fixedWidth />{" "}
          <Link href={`mailto:${contact.email}`} draggable={false}>
            <span className="d-sm-inline d-none">{contact.email}</span>
            <span
              className="d-sm-none d-inline"
              ref={mobileMailRef}
              onMouseEnter={handleMailHover}
              onMouseLeave={handleMailHover}
            >
              Email: {getMailPartsFromStr(contact.email, "organization")}
            </span>
            <AppTooltip
              show={showMailTooltip}
              targetRef={mobileMailRef}
              text={contact.email}
              placement="bottom"
            />
          </Link>
        </p>
      )}

      {contact.linkedin && (
        <p>
          <FontAwesomeIcon scale={1} icon={faLinkedin} fixedWidth />{" "}
          <Link
            href={contact.linkedin}
            referrerPolicy="no-referrer"
            target={"_blank"}
          >
            LinkedIn
          </Link>
        </p>
      )}
    </>
  )
}

export default SummaryPersonalInfo;