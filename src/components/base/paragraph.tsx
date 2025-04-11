import React from "react";
import clsx from "clsx";

interface Props {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  size?: "mini" | "extrasmall" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "ultra";
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
    extrasmall: "text-[10px]",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    xxl: "text-2xl",
    xxxl: "text-4xl",
    ultra: "text-[3rem]",
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
