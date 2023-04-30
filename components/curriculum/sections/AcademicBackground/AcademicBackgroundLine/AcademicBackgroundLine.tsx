import React from "react";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const AcademicBackgroundLine: ExtendedFC<{ academicBackgroundLine: AcademicBackground }> = ({ academicBackgroundLine }) => {
  const { title, institution, from, to } = academicBackgroundLine;

  let date = `${from} - ${to}`;

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'var(--a-color)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid var(--color)' }}
      date={date}
      iconStyle={{ background: 'var(--a-color)', color: '#fff' }}
      icon={<FontAwesomeIcon icon={faUniversity} />}
    >
      <h4 className="vertical-timeline-element-title">{title}</h4>
      <h5 className="vertical-timeline-element-subtitle">{institution}</h5>
    </VerticalTimelineElement>
  );
};

export default AcademicBackgroundLine;
