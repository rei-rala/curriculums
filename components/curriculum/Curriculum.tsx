import { lazy, useEffect, useMemo, useRef, useState } from "react";

// lazy
const SummaryComp = lazy(() => import("@components/curriculum/Summary/Summary"));
const AboutComp = lazy(() => import("@components/curriculum/sections/About/About"));
const StrengthsComp = lazy(() => import("@components/curriculum/sections/Strenghts/Strenghts"));
const LanguagesComp = lazy(() => import("@components/curriculum/sections/Languages/Languages"));
const CertificationsComp = lazy(() => import("@components/curriculum/sections/Certifications/Certifications"));
const ExperienceComp = lazy(() => import("@components/curriculum/sections/Experience/Experience"));
const SkillsComp = lazy(() => import("@components/curriculum/sections/Skills/Skills"));



import styles from "./Curriculum.module.css";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Curriculum: ExtendedFC<{ profile: IProfile }> = ({ profile }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // getting sections from profile
  const {
    about,
    personal,
    strengths,
    contact,
    languages,
    certifications,
    experience,
    skills,
  } = profile;

  // getting sections and removing some of them used in summary
  const sections = useMemo(
    () =>
      Object.keys(profile).filter(
        (s) => s !== "id" && s !== "personal" && s !== "contact"
      ),
    [profile]
  );

  // TODO: functions to scroll smoothly to next and previous child of container
  // TODO: Window context
  const scrollToNextChild = () => {
    if (containerRef.current) {

      // using X axis to scroll on width <= 768px
      window.innerWidth <= 768
        ? containerRef.current.scrollBy({
          left: window.innerWidth,
          behavior: "smooth",
        })
        : containerRef.current.scrollBy({
          top: window.innerHeight,
          behavior: "smooth",
        });
    }
  };

  const scrollToPreviousChild = () => {
    if (containerRef.current) {

      // using X axis to scroll on width <= 768px
      window.innerWidth <= 768
        ? containerRef.current.scrollBy({
          left: -window.innerWidth,
          behavior: "smooth",
        })
        : containerRef.current.scrollBy({
          top: -window.innerHeight,
          behavior: "smooth",
        });
    }
  };

  return (
    <Row>
      <Col
        p={0}
        md={4} lg={5}
        className={`text-center ${styles.curriculumLeft}`}
      >
        <SummaryComp
          personal={personal}
          contact={contact}
          sections={sections}
        />
      </Col>


      <Col p={0} md={8} lg={7} className={`${styles.scroller} position-relative`} >
        <Button
          onClick={scrollToPreviousChild}
          className={`${styles.button} ${styles.buttonPrevious}`}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <section
          ref={containerRef}
          className={`${styles.curriculumRight} d-flex flex-row flex-md-column flex-grow`}
        >
          <AboutComp about={about} />
          <ExperienceComp experience={experience} />
          <CertificationsComp certifications={certifications} />
          <SkillsComp skills={skills} />
          <StrengthsComp strengths={strengths} />
          <LanguagesComp languages={languages} />
        </section>

        <Button
          onClick={scrollToNextChild}
          className={`${styles.button} ${styles.buttonNext}`}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </Col>

    </Row>
  );
};

export default Curriculum;
