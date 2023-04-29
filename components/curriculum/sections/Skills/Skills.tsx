import React, { useMemo, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faLightbulb } from "@fortawesome/free-solid-svg-icons";

import styles from './Skills.module.css'
import { Badge } from "react-bootstrap";

const Skills: CurriculumFC = ({ skills }) => {
  const [shakeSoft, setShakeSoft] = useState(false);
  const [shakeHard, setShakeHard] = useState(false);

  const [hard, soft] = useMemo(() => {
    const hard = skills?.filter((s) => s.kind === "Hard") || [];
    const soft = skills?.filter((s) => s.kind === "Soft") || [];
    return [hard, soft];
  }, [skills]);

  if
    (!skills || skills.length === 0) return null;

  let hasSoft = soft.length > 0;
  let hasHard = hard.length > 0;

  function makeShake(kind: string) {
    if (kind === "soft") {
      setShakeSoft(true);
    } else {
      setShakeHard(true);
    }
  }

  function stopShake(kind: string) {
    if (kind === "soft") {
      setShakeSoft(false);
    } else {
      setShakeHard(false);
    }
  }

  return (
    <article className={styles.container} >
      <h3 className={styles.title} id="skills">Skills</h3>

      <div className={styles.skills}>
        {hasSoft && (
          <div
            className={styles.part}
            onMouseEnter={() => makeShake("soft")}
            onMouseLeave={() => stopShake("soft")}
          >
            <h4>
              <FontAwesomeIcon shake={shakeSoft} icon={faLightbulb} /> Soft
            </h4>
            <ul>
              {soft.map((s) => (
                <li key={s.kind + s.title}>
                  <Badge>{s.title} </Badge>
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasSoft && hasHard && (
          <div className={styles.verticalSeparator}></div>
        )}

        {hasHard && (
          <div
            className={styles.part}
            onMouseEnter={() => makeShake("hard")}
            onMouseLeave={() => stopShake("hard")}
          >
            <h4>
              <FontAwesomeIcon shake={shakeHard} icon={faGear} /> Hard
            </h4>
            <ul>
              {hard.map((s) => (
                <li key={s.kind + s.title}>
                  <Badge>{s.title} </Badge>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
};

export default Skills;
