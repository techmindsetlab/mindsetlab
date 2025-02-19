import { useState, useEffect } from "react";
import Button from "../base/button";
import Paragraph from "../base/paragraph";
import Title from "../base/title";
import { motion } from "framer-motion";
import ContactSVG from "../../animation/contact-header";
import { getImagePosition } from "../../helper/getImagePosition";
import { useNavigate } from "react-router-dom";

interface Props {
  scrollRotation: number;
  isScrollable?: boolean;
  typography: string;
}

const Contact = ({
  scrollRotation,
  isScrollable = true,
  typography,
}: Props) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollIndicator = 2600;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#FAFAFA] lg:px-12 lg:space-y-6 lg:py-12 p-5">
      <div className="overflow-hidden relative">
        {isScrollable ? (
          <motion.div
            className="w-full h-full"
            style={{
              transform: `${
                isDesktop
                  ? `translateX(${getImagePosition(
                      scrollRotation,
                      scrollIndicator,
                      false
                    )})`
                  : "none"
              } `,
              transition: "transform 0.1s ease-out",
            }}
          >
            <ContactSVG />
          </motion.div>
        ) : (
          <motion.div className="w-full h-full">
            <ContactSVG />
          </motion.div>
        )}
      </div>

      {/* DIVIDER */}
      <div className="flex gap-2 my-2 items-center">
        <img src="/black_circle.svg" className="w-5 h-5" />
        <div className="border-[0.5px] border-[#1e1e1e] w-full" />
        <Paragraph size="mini" className="text-[#1e1e1e]">
          US
        </Paragraph>
      </div>

      <Title
        text={typography}
        className="text-[#1e1e1e] lg:text-3xl text-2xl w-[80%]"
      />

      <Button
        onClick={() => handleClick()}
        text={"In Case You Missed It"}
        className="w-44 lg:w-64 font-neue-corp-thin mt-6 px-3 lg:py-2 lg:text-lg text-[12px]"
        isEnabledArrow
      />
    </div>
  );
};

export default Contact;
