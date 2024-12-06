import { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  selectedCategory: string | null;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
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
        className="bg-[#1e1e1e] cursor-none justify-between text-[14px] w-[10rem] text-[#fafafa] font-neue-corp-thin border border-[#fafafa] py-1 px-4 rounded-md flex items-center gap-2"
      >
        {selectedCategory ? selectedCategory : "All Works"}
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
        className="absolute top-10 left-4 bg-[#333333] text-white rounded-md w-48 shadow-lg"
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
