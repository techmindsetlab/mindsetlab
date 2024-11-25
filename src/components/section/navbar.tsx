"use client";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "../../helper/const";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Paragraph from "../base/paragraph";
import { motion } from "framer-motion";

interface Props {
  setIsHovered: (isHovered: boolean) => void;
}

const Navbar = ({ setIsHovered }: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const colorBackground = `linear-gradient(90deg, rgba(255, 255, 255, 1) ${scrollProgress}%, rgba(0, 0, 0, 1) ${scrollProgress}%)`;

  useEffect(() => {
    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPos = window.scrollY;
      const progress = (scrollPos / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 ">
      {/* DESKTOP NAVBAR */}
      <nav
        aria-label="Global"
        className="fixed top-0 left-0 w-full z-50 border border-[#808080] transition-all duration-200"
      >
        <div
          style={{ background: colorBackground }}
          className={`mx-auto flex max-w-8xl items-center justify-between p-4 lg:p-4 lg:px-8 relative z-10`}
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Mindsetlab Creative</span>
              <img
                alt="Logo"
                src="/src/assets/icons/mindset-logo.svg"
                className="h-10 w-auto text-white mix-blend-difference"
              />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                className="text-sm flex items-center gap-2 cursor-none mix-blend-difference text-white font-semibold"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`text-sm flex items-center gap-2 ${
                    item.name === "contact" &&
                    "border border-white rounded-full py-1.5 px-4"
                  }`}
                >
                  <Link
                    key={item.name}
                    to={item.href}
                    className="mix-blend-difference font-semibold"
                  >
                    <Paragraph
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {item.name}
                    </Paragraph>
                  </Link>
                  <FaArrowRightLong
                    className={`${
                      item.name === "contact" ? "block" : "hidden"
                    }`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black border-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Mindsetlab Creative</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 gap-2 flex items-center rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                  >
                    <Paragraph>{item.name}</Paragraph>
                    <FaArrowRightLong />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
