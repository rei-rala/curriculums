import React, { useState } from 'react';
import Link from 'next/link';

import { Badge, Button, Offcanvas } from 'react-bootstrap';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { camelCaseToWords, scrollToId, truncateString } from '@/utils';

import styles from './SectionsMobile.module.css';



// Using React-Bootstrap Offcanvas
const SectionsMobile: ExtendedFC<{ title: string, badge: string, list: string[], footer: Contact, }> = ({ title, badge, list, footer }) => {
  const [show, setShow] = useState(false);
  function toggleShow() {
    setShow(!show);
  }

  function toggleAndScrollToId(id: string) {
    scrollToId(id);
    toggleShow();
  }


  return (
    <>
      <Button
        aria-label={`Open sections of ${title}'s profile`}
        className={`rounded-circle fs-3`}
        variant="primary"
        onClick={toggleShow}>
        <FontAwesomeIcon icon={faBookOpen} scale={"2x"} />
      </Button>

      <Offcanvas show={show} onHide={toggleShow} className={styles.sMobile}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {title}
            <Badge pill bg="secondary" className='ms-1'>{badge}</Badge>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.sbMobileBody}>
          <ul>
            {list?.map((listItem) => (
              <li key={`mbSection-${listItem}`}>
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => {
                    toggleAndScrollToId(listItem)
                  }}
                >
                  {camelCaseToWords(listItem)}
                </Button>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>

        <footer className={styles.sMobileFooter}>
          <ul>
            {footer.phone && (
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <Link href={`tel:${footer.phone}`}>
                  {truncateString(footer.phone, 20)}
                </Link>
              </li>
            )}

            {footer.email && (
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <Link href={`mailto:${footer.email}`}>
                  {truncateString(footer.email, 20)}
                </Link>
              </li>
            )}

            {footer.linkedin && (
              <li>
                <FontAwesomeIcon scale={1} icon={faLinkedin} />{" "}
                <Link
                  href={footer.linkedin}
                  target={"_blank"}
                >
                  {truncateString(title, 20)}
                </Link>
              </li>
            )}
          </ul>
        </footer>

      </Offcanvas>
    </>
  );
}

export default SectionsMobile;