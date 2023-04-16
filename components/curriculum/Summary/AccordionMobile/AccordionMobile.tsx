import React from "react";
import { Accordion, Card } from "react-bootstrap";

import styles from "./AccordionMobile.module.css";
import Link from "next/link";

const AccordionMobile: ExtendedFC<{
  sections: string[];
  activeSection: string;
  setActiveSection: (section: string) => void;
}> = ({ sections, activeSection, setActiveSection }) => {
  // Using react-bootstrap Accordion
  return (
    <Accordion defaultActiveKey={activeSection}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Acceso directo
        </Accordion.Header>
        <Accordion.Body>
          {
            sections.map((section, index) => (
              <Card key={index} className={`mb-2 ${styles.accordionLinks} ${activeSection === section ? styles.activeSection : ""}`} onClick={() => setActiveSection(section)}>
                <Card.Body className={`p-2`}>
                  <Link href={`#${section}`}> {section}</Link>
                </Card.Body>
              </Card>
            ))
          }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
};

export default AccordionMobile;