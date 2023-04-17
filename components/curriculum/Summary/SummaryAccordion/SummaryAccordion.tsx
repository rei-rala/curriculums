import React from "react";
import { Accordion, Card } from "react-bootstrap";

import styles from "./SummaryAccordion.module.css";
import { scrollToId } from "@/utils";

// Using react-bootstrap Accordion
const SummaryAccordion: ExtendedFC<{
  sections: string[];
}> = ({ sections }) => {

  return (
    <Accordion flush className={`p-0 ${styles.accordionContainer}`}>
      <Accordion.Item className={styles.accordionItem} eventKey="">
        <Accordion.Header className={styles.accordionItemHeader}>
          Secciones
        </Accordion.Header>
        <Accordion.Body className="px-1 py-2">
          {
            sections.map(section => (
              <Card key={`accMb-${section}`} className={styles.accordionLinks}>
                <Card.Body className={`p-0`}>
                  <button onClick={() => scrollToId(section)}> {section}</button>
                </Card.Body>
              </Card>
            ))
          }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
};

export default SummaryAccordion;