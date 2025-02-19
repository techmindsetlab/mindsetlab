import { MdArrowOutward } from "react-icons/md";
import { footerNav } from "../../helper/const";
import Divider from "../base/divider";
import AnimatedLink from "../base/link";
import Paragraph from "../base/paragraph";

interface Props {
  onMouseEnter?: React.MouseEventHandler<HTMLParagraphElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLParagraphElement>;
}

const Footer = ({ onMouseEnter, onMouseLeave }: Props) => {
  return (
    <div className="px-5 lg:px-12 pb-1 pt-10">
      <div className="flex mb-12 justify-between">
        <div className="grid grid-cols-1 lg:w-[60%] w-full lg:grid-cols-3">
          {footerNav.map((item, index) => (
            <div className="mt-8" key={index}>
              <div className="flex gap-2 items-center">
                <Paragraph
                  text={item.navigation}
                  className="font-neue-corp-bold text-lg lg:text-2xl text-[#FAFAFA]"
                />
                <div className="border block w-full h-fit lg:hidden border-[#FAFAFA]" />
              </div>

              <div className="grid mt-2">
                {item.subnavigation.map((item) => (
                  <div className="w-fit" key={item.name}>
                    <AnimatedLink
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      additionalStyle={`text-xl cursor-none`}
                      key={item.name}
                      name={item.name}
                      to={item.href}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-[35%] hidden lg:block mt-8">
          <Paragraph size="ultra" className="text-[#FAFAFA] leading-[3.5rem]">
            GOT SOMETHING <br />
            IN YOUR MIND?
          </Paragraph>

          {/* DESKTOP SOCIAL MEDIA */}
          <div className="hidden lg:flex mt-3 justify-start gap-8">
            <a
              target="_blank"
              className="group flex cursor-none items-center relative"
              href="https://www.linkedin.com/company/mindsetlabid/"
            >
              <Paragraph
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="text-[#FAFAFA] relative"
              >
                Linkedin
              </Paragraph>
              <MdArrowOutward color="white" />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              target="_blank"
              className="group flex cursor-none items-center relative"
              href="https://www.instagram.com/mindsetlabid/"
            >
              <Paragraph
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="text-[#FAFAFA] relative"
              >
                Instagram
              </Paragraph>
              <MdArrowOutward color="white" />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE SOCIAL MEDIA ICON */}
      <div className="grid lg:hidden mt-3 justify-end">
        <a
          href="https://www.linkedin.com/company/mindsetlabid/"
          className="transition-transform transform flex items-center justify-end hover:scale-110"
        >
          <Paragraph className="text-[#FAFAFA]">Linkedin</Paragraph>
          <MdArrowOutward color="white" />
        </a>
        <a
          href="https://www.instagram.com/mindsetlab.id/"
          className="transition-transform flex items-center justify-end transform hover:scale-110"
        >
          <Paragraph className="text-[#FAFAFA]">Instagram</Paragraph>
          <MdArrowOutward color="white" />
        </a>
      </div>

      {/* DESKTOP DIVIDER */}
      <div className="hidden lg:block">
        <Divider
          isHasText
          textWidth="w-[38.5rem]"
          text="All rights reserved, 2019 - 2025 | PT. Bingo Indonesia"
          scrollRotation={undefined}
        />
      </div>

      {/* MOBILE DIVIDER */}
      <div className="mt-3 flex justify-between lg:hidden">
        <Paragraph
          size="mini"
          text="All rights reserved, 2019 - 2025 | PT. Bingo Indonesia"
          className="text-[#FAFAFA] font-neue-corp-thin text-[10px]"
        />
        <Paragraph
          size="mini"
          text="GOT SOMETHING IN YOUR MIND?"
          className="text-[#FAFAFA] text-[10px]"
        />
      </div>
    </div>
  );
};

export default Footer;
