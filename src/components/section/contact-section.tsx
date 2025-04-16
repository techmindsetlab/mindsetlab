import { useState, useEffect, useRef } from "react";
import Button from "../base/button";
import Paragraph from "../base/paragraph";
import Title from "../base/title";
import { motion } from "framer-motion";
import ContactSVG from "../../animation/contact-header";
import { getImagePosition } from "../../helper/getImagePosition";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

interface Props {
  scrollRotation: number;
  isScrollable?: boolean;
  typography: string;
  isAboutPage?: boolean;
}
const character = ["project", "success", "idea"];
const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

const Contact = ({
  scrollRotation,
  isScrollable = true,
  typography,
  isAboutPage = false,
}: Props) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const scrollIndicator = 2600;
  const navigate = useNavigate();

  const scrambleTo = (target: string) => {
    const totalFrames = 20;
    let frame = 0;

    const scramble = () => {
      const output = target
        .split("")
        .map((char, i) => {
          if (i < Math.floor((frame / totalFrames) * target.length)) {
            return char;
          } else {
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        })
        .join("");

      if (textRef.current) textRef.current.textContent = output;

      frame++;
      if (frame <= totalFrames) {
        requestAnimationFrame(scramble);
      }
    };

    scramble();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % character.length;
      setIndex(nextIndex);
      scrambleTo(character[nextIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

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
      {isAboutPage && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex gap-2 items-center"
        >
          <Paragraph
            text="next"
            size="xxl"
            className="text-[#1e1e1e] lg:-mt-4 w-fit lg:text-3xl text-2xl"
          />
          <IoIosArrowForward color="#1E1E1E" className="lg:-mt-4" size={25} />
          <div
            ref={textRef}
            className="text-[#1e1e1e] lg:-mt-4 w-fit lg:text-3xl text-2xl font-neue-machina-regular"
          >
            {character[0]}
          </div>
        </motion.div>
      )}

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
