import React from "react";

interface LoadingProps {
  className?: string;
  variant?: "spinner" | "grow";
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
}

const Spinner: ExtendedFC<LoadingProps> = (props) => {
  const { color } = props

  return (
    <div className={`spinner-border ${color ? `text-${color}` : ""}`} {...props}>
      <span className="visually-hidden">Cargando...</span>
    </div>
  )
}

const GrowingSpinner: ExtendedFC<LoadingProps> = (props) => {
  const { color } = props

  return (
    <div className={`spinner-grow ${color ? `text-${color}` : ""}`} {...props}>
      <span className="visually-hidden">Cargando...</span>
    </div>
  )
} 

const Loading: ExtendedFC<LoadingProps> = (props) => {
  const variantToComponent = {
    spinner: Spinner,
    grow: GrowingSpinner,
  };

  const Component = variantToComponent[props.variant || "spinner"];

  return <Component color={props.color} {...props} />;
};


export default Loading