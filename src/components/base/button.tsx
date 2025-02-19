import React from "react";
import { IoIosArrowForward } from "react-icons/io";
type ButtonSize = "extrasmall" | "small" | "medium" | "large";

interface ButtonProps {
  text: string | React.ReactNode;
  onClick?: () => void;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  isPrimary?: boolean;
  isEnabledArrow?: boolean;
  isSmallButton?: boolean;
  hasImage?: boolean;
  imgSrc?: string;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  isPrimary = true,
  disabled = false,
  isEnabledArrow = false,
  isSmallButton = false,
  className = "",
  hasImage = false,
  imgSrc,
  type,
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
    transition: "all 0.5s ease",
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
    justifyContent: !hasImage ? "space-between" : "start",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: isSmallButton ? 10 : 20,
    color: "#fafafa",
    opacity: 1,
    transform: "rotateX(0)",
    transition: "transform 0.8s, opacity 0.8s",
  };

  const afterStyle: React.CSSProperties = {
    borderRadius: "5px",
    content: "attr(data-back)",
    position: "absolute",
    top: "0",
    padding: isSmallButton ? 10 : 20,
    left: "0",
    width: "100%",
    justifyContent: !hasImage ? "space-between" : "start",
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
      type={type}
      className={`${baseStyle} cursor-none ${
        isEnabledArrow && !hasImage ? "flex items-center justify-between" : ""
      } ${className}`}
      style={buttonStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      <span className={`before`} style={beforeStyle} data-front={text}>
        {hasImage && (
          <img
            src={imgSrc}
            className="w-3.5 mix-blend-difference h-3.5 mr-2"
            alt=""
          />
        )}
        {text}
        {isEnabledArrow && <IoIosArrowForward />}
      </span>
      <span className="after" style={afterStyle} data-back={text}>
        {hasImage && (
          <img
            src={imgSrc}
            className="w-3.5 mix-blend-difference mr-2 h-3.5"
            alt=""
          />
        )}
        {text}
        {isEnabledArrow && <IoIosArrowForward />}
      </span>
    </button>
  );
};

export default Button;
