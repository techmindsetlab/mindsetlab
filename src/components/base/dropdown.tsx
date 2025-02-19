import { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  isForm?: boolean;
  selectedCategory: string | null;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  isForm = false,
  onSelect,
  selectedCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`${
          isForm
            ? "bg-[#FAFAFA] w-full text-[#1e1e1e] border-[#1e1e1e] p-3"
            : "bg-[#1e1e1e] w-[10rem] text-[#fafafa] border-[#fafafa] px-4 py-1"
        }  cursor-none justify-between text-[14px] font-neue-corp-thin border rounded-md flex items-center gap-2`}
      >
        {isForm ? (
          <span className="font-neue-machina-regular">
            {selectedCategory ? selectedCategory : "Needs"}
          </span>
        ) : (
          <span>{selectedCategory ? selectedCategory : "All Works"}</span>
        )}

        <BsChevronDown
          className={`transition-transform duration-300 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`absolute  ${
          isForm ? "w-full left-0 top-14" : "left-0 w-48 top-10"
        }  bg-[#333333] text-white rounded-md  shadow-lg`}
        style={{ zIndex: 10 }}
      >
        {isOpen && (
          <ul className="p-2">
            {options.map((option, index) => (
              <li
                key={index}
                className="rounded-md cursor-none text-[14px] p-2 hover:bg-[#444444]"
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default Dropdown;
