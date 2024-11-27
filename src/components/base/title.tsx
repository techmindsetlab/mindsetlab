import React, { ReactNode } from "react";

interface HeaderProps {
  text: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  headerSize?: string;
}

const Title: React.FC<HeaderProps> = ({
  text,
  className = "",
  style = {},
  headerSize,
}) => {
  return (
    <h1 className={`${headerSize} ${className}`} style={style}>
      {text}
    </h1>
  );
};

export default Title;
