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
    <div className="px-5 lg:px-12 pb-1">
      <div className="flex mb-12 justify-between">
        <div className="grid grid-cols-1 lg:w-[60%] w-full lg:grid-cols-2">
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
        <div className="lg:w-[40%] hidden lg:block mt-8">
          <Paragraph size="ultra" className="text-[#FAFAFA] leading-[3.5rem]">
            GOT SOMETHING <br />
            IN YOUR MIND?
          </Paragraph>
          <div className="hidden lg:flex mt-3 justify-start gap-2">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/mindsetlabid/"
            >
              <img
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                src="/linkedin_logo.svg"
                className="w-10 h-10 cursor-none"
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/mindsetlab.id/">
              <img
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                src="/instagram_logo.svg"
                className="w-10 h-10 cursor-none"
              />
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE SOCIAL MEDIA ICON */}
      <div className="flex lg:hidden mt-3 justify-end gap-2">
        <a href="" className="transition-transform transform hover:scale-110">
          <img src="/linkedin_logo.svg" className="w-8 h-8" />
        </a>
        <a href="" className="transition-transform transform hover:scale-110">
          <img src="/instagram_logo.svg" className="w-8 h-8" />
        </a>
      </div>

      {/* DESKTOP DIVIDER */}
      <div className="hidden lg:block">
        <Divider
          isHasText
          textWidth="w-[12.5rem]"
          text="© 2023 — Copyright"
          scrollRotation={undefined}
        />
      </div>

      {/* MOBILE DIVIDER */}
      <div className="mt-3 flex justify-between lg:hidden">
        <Paragraph
          size="mini"
          text="© 2024 — Copyright"
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
