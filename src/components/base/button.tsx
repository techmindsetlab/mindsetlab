import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "success";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  style = {},
}) => {
  const baseStyle = "rounded px-4 py-2 font-bold focus:outline-none";
  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
  };
  const sizeStyles: Record<ButtonSize, string> = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      style={style}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
