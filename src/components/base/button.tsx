import React from "react";
import { IoIosArrowForward } from "react-icons/io";
type ButtonSize = "extrasmall" | "small" | "medium" | "large";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  isPrimary?: boolean;
  isEnabledArrow?: boolean;
  isSmallButton?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  isPrimary = true,
  disabled = false,
  isEnabledArrow = false,
  isSmallButton = false,
  className = "",
}) => {
  const baseStyle = "rounded font-bold focus:outline-none";

  const buttonStyle: React.CSSProperties = {
    position: "relative",
    padding: isSmallButton ? 10 : 20,
    display: "inline-block",
    fontWeight: "600",
    borderRadius: "5px",
    cursor: "none",
    backgroundColor: `${isPrimary ? "#1e1e1e" : "#fafafa"} `,
    border: `${isPrimary ? "1px solid #1e1e1e" : "1px solid #fafafa"}`,
    color: "#FAFAFA",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const beforeStyle: React.CSSProperties = {
    content: "attr(data-front)",
    position: "absolute",
    borderRadius: "5px",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: isSmallButton ? 10 : 20,
    color: "#fafafa",
    opacity: 1,
    transform: "rotateX(0)",
    transition: "transform 0.5s, opacity 0.5s",
  };

  const afterStyle: React.CSSProperties = {
    borderRadius: "5px",
    content: "attr(data-back)",
    position: "absolute",
    top: "0",
    padding: isSmallButton ? 10 : 20,
    left: "0",
    width: "100%",
    justifyContent: "space-between",
    height: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fafafa",
    color: "#1e1e1e",
    opacity: 0,
    transform: "rotateX(90deg)",
    transition: "transform 0.5s, opacity 0.5s",
  };

  const handleHover = (event: React.MouseEvent) => {
    const before = event.currentTarget.querySelector(".before") as HTMLElement;
    const after = event.currentTarget.querySelector(".after") as HTMLElement;

    before.style.transform = "rotateX(180deg)";
    before.style.opacity = "0";
    after.style.transform = "rotateX(0)";
    after.style.opacity = "1";
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    const before = event.currentTarget.querySelector(".before") as HTMLElement;
    const after = event.currentTarget.querySelector(".after") as HTMLElement;

    before.style.transform = "rotateX(0)";
    before.style.opacity = "1";
    after.style.transform = "rotateX(180deg)";
    after.style.opacity = "0";
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} cursor-none ${
        isEnabledArrow && "flex items-center justify-between"
      } ${className}`}
      style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      <span
        className="before justify-between"
        style={beforeStyle}
        data-front={text}
      >
        {text}
        {isEnabledArrow && <IoIosArrowForward />}
      </span>
      <span className="after" style={afterStyle} data-back={text}>
        {text}
        {isEnabledArrow && <IoIosArrowForward />}
      </span>
    </button>
  );
};

export default Button;
