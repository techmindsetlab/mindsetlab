"use client";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "../../helper/const";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Paragraph from "../base/paragraph";
import AnimatedLink from "../base/link";

interface Props {
  setIsHovered: (isHovered: boolean) => void;
}

const Navbar = ({ setIsHovered }: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const colorBackground = `linear-gradient(90deg, rgba(255, 255, 255, 1) ${scrollProgress}%, #1e1e1e ${scrollProgress}%)`;

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
    <header className="sticky z-10 top-0">
      {/* DESKTOP NAVBAR */}
      <nav
        aria-label="Global"
        className="fixed top-0 left-0 w-full md:border border-b border-[#808080] transition-all duration-200"
      >
        <div
          style={{ background: colorBackground }}
          className={`mx-auto max-w-8xl flex items-center justify-between p-4 lg:px-12 relative z-10`}
        >
          <div className="flex lg:flex-1">
            <Link
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              to="/"
              className="-m-1.5 p-1.5 cursor-none"
            >
              <span className="sr-only">Mindsetlab Creative</span>
              <img
                alt="Logo"
                src="/mindsetlab_logo.svg"
                className="h-8 w-auto text-[#FAFAFA] mix-blend-difference"
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md  text-gray-400"
            >
              <Bars3Icon aria-hidden="true" className="h-12 w-12" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <AnimatedLink
                additionalStyle={`uppercase ${
                  item.name === "contact" &&
                  "border border-[#FAFAFA] rounded-full p-3"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                key={item.name}
                name={item.name}
                to={"/"}
              />
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
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#1e1e1e] border-[#FAFAFA] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#FAFAFA]/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Mindsetlab Creative</span>
              <img alt="" src="/mindsetlab_logo.svg" className="h-8 w-auto" />
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
