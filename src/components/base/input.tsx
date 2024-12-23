import React from "react";
import { useField } from "formik";

interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  isTextarea?: boolean;
  rows?: number;
}

const Input: React.FC<InputProps> = ({
  name,
  type = "text",
  placeholder,
  className = "",
  isTextarea = false,
  rows = 4,
}) => {
  const [field] = useField(name);

  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {isTextarea ? (
        <textarea
          {...field}
          id={name}
          placeholder={placeholder}
          rows={rows}
          className={`border cursor-none placeholder:text-[#1e1e1e] w-full rounded-md p-3 text-sm resize-none border-[#1e1e1e]`}
        />
      ) : (
        <input
          {...field}
          id={name}
          type={type}
          placeholder={placeholder}
          className={`border cursor-none w-full placeholder:text-[#1e1e1e] border-[#1e1e1e] rounded-md p-3 text-sm`}
        />
      )}
    </div>
  );
};

export default Input;
