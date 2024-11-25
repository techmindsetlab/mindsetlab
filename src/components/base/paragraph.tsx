import React from "react";
import clsx from "clsx";

interface Props {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  onMouseEnter?: React.MouseEventHandler<HTMLParagraphElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLParagraphElement>;
}

const Paragraph = ({
  text,
  className,
  children,
  onMouseEnter,
  onMouseLeave,
  style,
  size = "md",
}: Props) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <p
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={clsx(className, sizeClasses[size])}
      style={style}
    >
      {children || text}
    </p>
  );
};

export default Paragraph;
