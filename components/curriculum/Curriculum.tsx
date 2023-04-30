import { lazy, useMemo, useRef } from "react";

// Not lazy for sure
import SummaryComp from "@components/curriculum/Summary/Summary";
import AboutComp from "@components/curriculum/sections/About/About";

// Doubts
const StrengthsComp = lazy(() => import("@components/curriculum/sections/Strenghts/Strenghts"));
const LanguagesComp = lazy(() => import("@components/curriculum/sections/Languages/Languages"));
const SkillsComp = lazy(() => import("@components/curriculum/sections/Skills/Skills"));

// Lazy for sure
const AcademicBackgroundComp = lazy(() => import("@/components/curriculum/sections/AcademicBackground/AcademicBackground"));
const WorkExperienceComp = lazy(() => import("@components/curriculum/sections/WorkExperience/WorkExperience"));

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
    academicBackground,
    workExperience,
    skills,
  } = profile;

  // removing some of them already used in summary
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


      <Col p={0} md={8} lg={7} className="position-relative" >
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
          <WorkExperienceComp workExperience={workExperience} />
          <AcademicBackgroundComp academicBackground={academicBackground} />
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
