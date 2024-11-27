import React from "react";
import { IoIosArrowForward } from "react-icons/io";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "extrasmall" | "small" | "medium" | "large";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  isEnabledArrow?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  isEnabledArrow = false,
  className = "",
  style = {},
}) => {
  const baseStyle = "rounded font-bold focus:outline-none";
  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-[#1E1E1E] text-[#FAFAFA]",
    secondary: "bg-[#FAFAFA] text-[#1e1e1e]",
  };
  const sizeStyles: Record<ButtonSize, string> = {
    extrasmall: "text-[10px]",
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} cursor-none ${
        isEnabledArrow && "flex items-center justify-between"
      } ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      style={style}
      disabled={disabled}
    >
      {text}
      {isEnabledArrow && <IoIosArrowForward />}
    </button>
  );
};

export default Button;
