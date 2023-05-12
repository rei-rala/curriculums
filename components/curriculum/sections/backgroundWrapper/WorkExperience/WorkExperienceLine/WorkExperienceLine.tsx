import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const WorkExperienceLine: ExtendedFC<{ workExperience: WorkExperience }> = ({ workExperience }) => {
  const { position, employer, from, to } = workExperience;

  let date = `${from} - ${to}`;

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'var(--accent)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid var(--color)' }}
      date={date}
      iconStyle={{ background: 'var(--accent)', color: '#fff' }}
      icon={<FontAwesomeIcon icon={faBriefcase} />}
    >
      <h4 className="vertical-timeline-element-title">{position}</h4>
      <h5 className="vertical-timeline-element-subtitle">{employer}</h5>
    </VerticalTimelineElement>
  );
};

export default WorkExperienceLine;
