import React from "react";

import { Overlay, Tooltip } from "react-bootstrap";

import styles from './AppTooltip.module.css'

interface TooltipProps {
  text: string;
  show: boolean;
  targetRef: React.RefObject<HTMLElement> | null;
  placement?: "top" | "right" | "bottom" | "left";
}

// Solucion utilizando reactbootstrap
const AppTooltip: React.FC<TooltipProps> = ({ show, text, targetRef, placement = "top" }) => {
  if (!targetRef) return null;

  return (
    <Overlay target={targetRef.current} show={show} placement={placement}>
      {(props) => (
        <Tooltip className={styles.appTooltip} {...props}>
          {text}
        </Tooltip>
      )}
    </Overlay>
  );
};

export default AppTooltip