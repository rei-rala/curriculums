import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceLineComponent: ExtendedFC<{ experience: Experience }> = ({ experience }) => {
  const { position, employer, from, to } = experience;

  let date = `${from} - ${to}`;

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'var(--a-color)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid var(--color)' }}
      date={date}
      iconStyle={{ background: 'var(--a-color)', color: '#fff' }}
      icon={<FontAwesomeIcon icon={faBriefcase} />}
    >
      <h4 className="vertical-timeline-element-title">{position}</h4>
      <h5 className="vertical-timeline-element-subtitle">{employer}</h5>
    </VerticalTimelineElement>
  );
};

export default ExperienceLineComponent;
