import React from "react";
import { Card } from "react-bootstrap";

import styles from "./SummaryAccordion.module.css";
import { camelCaseToWords, scrollToId } from "@/utils";


const SummaryAccordion: React.FC<{ sections: string[] }> = (props) => {
  return (
    <>
      {
        props.sections?.map(section => (
          <Card
            key={`accMb-${section}`}
            className={styles.accordionLinks}
            onClick={() => scrollToId(section, 'smooth')}
          >
            <Card.Body className={`p-0`}>
              {camelCaseToWords(section)}
            </Card.Body>
          </Card>
        ))
      }
    </>
  )
};

export default SummaryAccordion;