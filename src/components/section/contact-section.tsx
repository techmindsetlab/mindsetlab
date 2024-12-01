import { useState, useEffect } from "react";
import Button from "../base/button";
import Paragraph from "../base/paragraph";
import Title from "../base/title";
import { motion } from "framer-motion";
import ContactSVG from "../../animation/contact-hover-masking";

interface Props {
  scrollRotation: number;
}

const Contact = ({ scrollRotation }: Props) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getImagePosition = () => {
    const startScroll = 2600;
    const endScroll = 3000;
    const initialOffset = 30;
    const finalOffset = 0;

    if (scrollRotation <= startScroll) {
      return `${initialOffset}%`;
    }
    if (scrollRotation >= endScroll) {
      return `${finalOffset}%`;
    }

    const progress = (scrollRotation - startScroll) / (endScroll - startScroll);
    const translateValue =
      initialOffset - progress * (initialOffset - finalOffset);
    return `${translateValue}%`;
  };
  return (
    <div className="bg-[#FAFAFA]  lg:px-14 lg:space-y-6 lg:py-12 p-5">
      <div className="overflow-hidden relative">
        <motion.div
          className="w-full h-full"
          style={{
            transform: `${
              isDesktop ? `translateX(${getImagePosition()})` : "none"
            } `,
            transition: "transform 0.1s ease-out",
          }}
        >
          <ContactSVG />
        </motion.div>
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
        text="Buatkan copy pertanyaan kebutuhan client?"
        headerSize="xl"
        className="text-[#1e1e1e] lg:text-3xl w-[80%]"
      />

      <Button
        text={"Contact Us"}
        size="small"
        className="w-44 lg:w-64 font-neue-corp-thin mt-4 px-3 lg:py-2 lg:text-lg py-1.5"
        isEnabledArrow
      />
    </div>
  );
};

export default Contact;
