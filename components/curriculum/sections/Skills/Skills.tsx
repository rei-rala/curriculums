import React, { useMemo, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faLightbulb } from "@fortawesome/free-solid-svg-icons";

import styles from './Skills.module.css'
import SkillBadges from "./SkillBadges/SkillBadges";
import { SkillKind } from "@/enums";

const Skills: CurriculumFC = ({ skills }) => {
  const [shakeSoft, setShakeSoft] = useState(false);
  const [shakeHard, setShakeHard] = useState(false);

  const [hardSkills, softSkills] = useMemo(() => ([
    skills?.filter((s) => s.kind === SkillKind.Hard) || [],
    skills?.filter((s) => s.kind === SkillKind.Soft) || []
  ]), [skills]);

  if
    (!skills || skills.length === 0) return null;

  let hasSoftSkills = softSkills.length > 0;
  let hasHardSkills = hardSkills.length > 0;

  function makeShake(kind: string) {
    if (kind === SkillKind.Soft) {
      setShakeSoft(true);
    } else {
      setShakeHard(true);
    }
  }

  function stopShake(kind: string) {
    if (kind === SkillKind.Soft) {
      setShakeSoft(false);
    } else {
      setShakeHard(false);
    }
  }

  return (
    <article id="skills" className={styles.container}>
      <h3 className={styles.title} >Skills</h3>

      <div className={styles.skills}>
        {hasSoftSkills && (
          <div
            className={styles.part}
            onMouseEnter={() => makeShake(SkillKind.Soft)}
            onMouseLeave={() => stopShake(SkillKind.Soft)}
          >
            <h4>
              <FontAwesomeIcon shake={shakeSoft} icon={faLightbulb} /> Soft
            </h4>
            <div>
              <SkillBadges skills={softSkills} />
            </div>
          </div>
        )}

        {hasSoftSkills && hasHardSkills && (
          <div className={styles.verticalSeparator}></div>
        )}

        {hasHardSkills && (
          <div
            className={styles.part}
            onMouseEnter={() => makeShake(SkillKind.Hard)}
            onMouseLeave={() => stopShake(SkillKind.Hard)}
          >
            <h4>
              <FontAwesomeIcon shake={shakeHard} icon={faGear} /> Hard
            </h4>
            <div>
              <SkillBadges skills={hardSkills} />
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default Skills;
