import React from "react";
import clsx from "clsx";

interface Props {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  size?: "mini" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
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
    mini: "text-[8px]",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    xxl: "text-2xl",
    xxxl: "text-4xl",
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
