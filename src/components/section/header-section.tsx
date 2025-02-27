import { useNavigate } from "react-router-dom";
import BottomAnimation from "../../animation/from-bottom";
import Button from "../base/button";
import Paragraph from "../base/paragraph";
import Title from "../base/title";
import { motion } from "framer-motion";

interface Props {
  scrollRotation: number;
  scale: number;
}

const Header = ({ scrollRotation, scale }: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      {/* HEADER LOGO */}
      <BottomAnimation
        duration={1.2}
        wrapperStyle="mt-[6rem] lg:mt-[8rem]"
        motionStyle="flex items-center"
      >
        <img
          src="/header_part_one.svg"
          alt="Mindsetlab Creative Logo Header"
          className="h-full w-[33.5%] md:w-[35%] transition-transform duration-100"
          style={{
            transform: `translateX(${-((scale - 1) * 35)}%)`,
          }}
        />
        <img
          src="/header_part_two.svg"
          alt="Mindsetlab Creative Logo Header"
          className="h-full w-[24%] md:w-[25%] -mx-0.5 md:-mx-2 -mt-[1px] md:-mt-1 transition-transform duration-100"
          style={{
            transform: `scaleX(${scale})`,
          }}
        />
        <img
          src="/header_part_three.svg"
          alt="Mindsetlab Creative Logo Header"
          className="h-full w-[42.5%] md:w-[45.5%] transition-transform duration-100"
          style={{
            transform: `translateX(${(scale - 1) * 35}%)`,
          }}
        />
      </BottomAnimation>
      <div className="lg:flex lg:mt-6 lg:gap-8">
        {/* COPY MINDSETLAB */}
        <div className="flex items-center mt-4 lg:my-12">
          <div className="lg:w-full w-[80%]">
            <BottomAnimation duration={1.4}>
              <Paragraph
                size="lg"
                className="text-[#FAFAFA] leading-5 text-2xl lg:text-5xl"
              >
                Tempting innovation with a touch of subtle sophistication
              </Paragraph>
            </BottomAnimation>
            <BottomAnimation duration={1.5}>
              <Paragraph
                size="mini"
                className="text-[#FAFAFA] text-[8px] lg:text-xl mt-2 font-neue-corp-thin leading-3"
              >
                Combining bold creativity with practical innovation, we craft
                solutions <br /> that resonate with your brand's identity and
                drive meaningful results.
              </Paragraph>
            </BottomAnimation>
          </div>

          <div className="relative h-[5rem] lg:hidden w-[5rem] flex items-center justify-center">
            <img
              src="/inner_octagon.svg"
              alt="Inner Octagon Logo"
              className="absolute h-[22px] w-[22px]"
              style={{
                transform: `rotate(${scrollRotation * -0.2}deg)`,
              }}
            />

            <img
              src="/outer_octagon.svg"
              alt="Outer Octagon Logo"
              className="absolute h-full w-full"
              style={{
                transform: `rotate(${scrollRotation * 0.2}deg)`,
              }}
            />
          </div>
        </div>

        {/* CONTACT US  */}

        <div className="overflow-hidden w-full lg:w-[50%] relative">
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 1.8,
              delay: 0,
            }}
            className="border w-full mt-8 rounded-md px-3 lg:px-5 py-2 border-[#FAFAFA] bg-[#FAFAFA]"
          >
            <img
              src="/boy_cap.svg"
              className="w-[50px] h-[50px] lg:w-[4rem] lg:h-[4rem]"
              alt="boy cap"
            />
            <Title
              text="Your brand isn’t branding? We listen and we don’t judge!"
              className="text-[15px] lg:text-xl w-[80%] mt-1 lg:mt-3 leading-4"
            />
            <Paragraph
              size="mini"
              className="my-1.5 lg:my-3 w-[80%] text-[8px] lg:text-[16px] font-neue-corp-thin leading-4"
            >
              Ready to get started? Reach out—we’re just a message away!
            </Paragraph>
            <Button
              onClick={() => navigate("/contact")}
              size="extrasmall"
              isEnabledArrow
              className="w-full lg:text-xl text-[14px] font-neue-corp-thin lg:py-3 lg:mb-3 py-2"
              text={"Hit us Up!"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
