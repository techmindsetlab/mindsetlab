import { useState, useEffect } from "react";
// import Button from "../base/button";
import Paragraph from "../base/paragraph";
import Title from "../base/title";
import { motion } from "framer-motion";
import ServiceSVG from "../../animation/service-header";
import { getImagePosition } from "../../helper/getImagePosition";

interface Props {
  scrollRotation: number;
}

const Service = ({ scrollRotation }: Props) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollIndicator = 2200;

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#1E1E1E] lg:py-12 lg:px-12 p-5">
      <motion.div
        className="w-full h-full"
        style={{
          transform: `${
            isDesktop
              ? `translateX(${getImagePosition(scrollRotation, scrollIndicator, true)})`
              : "none"
          } `,
          transition: "transform 0.1s ease-out",
        }}
      >
        <ServiceSVG />
      </motion.div>

      {/* DIVIDER */}
      <div className="flex gap-2 my-2 items-center">
        <Paragraph size="mini" className="text-[#fafafa]">
          SPECIALITY
        </Paragraph>
        <div className="border-[0.5px] border-[#fafafa] w-full" />
        <img src="/gradient_octagon.svg" className="w-5 h-5" />
      </div>

      <div className="w-[70%]">
        <Title
          className="text-[#fafafa] lg:text-3xl leading-6 text-[20px]"
          text={"You haven’t been the main character? "}
        />
        <Paragraph
          size="mini"
          className="font-neue-corp-thin mt-2 lg:text-xl text-[#fafafa]"
        >
          We’ll help you bring out your 100 and left no crumbs. Say less!
        </Paragraph>
      </div>

      {/* <Button
        text={"Our Service"}
        size="small"
        isPrimary={false}
        className="w-44 lg:w-64 font-neue-corp-thin  mt-4 px-3 lg:py-2 lg:text-lg py-1.5"
        isEnabledArrow
      /> */}
    </div>
  );
};

export default Service;
