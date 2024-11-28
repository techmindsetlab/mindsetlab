import BottomAnimation from "../../animation/from-bottom";
import Button from "../base/button";
import Paragraph from "../base/paragraph";
import Title from "../base/title";

interface Props {
  onMouseEnter?: React.MouseEventHandler<HTMLParagraphElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLParagraphElement>;
  scrollRotation: number;
  scale: number;
}

const Header = ({
  onMouseLeave,
  onMouseEnter,
  scrollRotation,
  scale,
}: Props) => {
  return (
    <div>
      {/* HEADER LOGO */}

      <BottomAnimation
        wrapperStyle="mt-[6rem] lg:mt-[8rem]"
        motionStyle="flex items-center"
      >
        <img
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          src="/header_part_one.svg"
          alt="Mindsetlab Creative Logo Header"
          className="h-full w-[33.5%] md:w-[35%] transition-transform duration-100"
          style={{
            transform: `translateX(${-((scale - 1) * 35)}%)`,
          }}
        />
        <img
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          src="/header_part_two.svg"
          alt="Mindsetlab Creative Logo Header"
          className="h-full w-[24%] md:w-[25%] -mx-0.5 md:-mx-2 -mt-[1px] md:-mt-1 transition-transform duration-100"
          style={{
            transform: `scaleX(${scale})`,
          }}
        />
        <img
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
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
        <div className="flex justify-between items-center mt-4 lg:my-12">
          <div className="lg:w-full w-[75%]">
            <BottomAnimation>
              <Paragraph
                size="xxl"
                className="text-[#FAFAFA] leading-7 text-2xl lg:text-5xl"
              >
                Tolong diganti copy <br className="block lg:hidden" /> tentang
                Mindsetlab
              </Paragraph>
            </BottomAnimation>
            <BottomAnimation>
              <Paragraph
                size="sm"
                className="text-[#FAFAFA] text-sm lg:text-xl mt-2 font-neue-corp-thin leading-4"
              >
                Nah ini penjelasan tambahannya tentang headline diatas yaa{" "}
                <br className="hidden lg:block" /> Nah ini penjelasan
                tambahannya tentang headline diatas yaa
              </Paragraph>
            </BottomAnimation>
          </div>

          <div className="relative h-[5rem] w-[5rem] flex items-center justify-center">
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
        <div className="border w-full lg:w-[50%] mt-8 rounded-md px-3 lg:px-5 py-1 border-[#FAFAFA] bg-[#FAFAFA]">
          <img
            src="/boy_cap.svg"
            className="w-[50px] h-[50px] lg:w-[4rem] lg:h-[4rem]"
            alt="boy cap"
          />
          <Title
            text="Tolong digantikan dengan copywriting bertanya kebutuhan
          client/audiense yang masuk website ini."
            className="text-[15px] lg:text-xl w-[80%] mt-1 lg:mt-3 leading-4"
          />
          <Paragraph
            size="mini"
            className="my-1.5 lg:my-3 w-[80%] text-[8px] lg:text-[16px] font-neue-corp-thin leading-4"
          >
            Embel embel untuk ngajak audiense kontak kita yaa
          </Paragraph>
          <Button
            size="extrasmall"
            isEnabledArrow
            className="w-full lg:text-xl font-neue-corp-thin px-2 lg:py-3 lg:mb-3 py-1"
            text={"Button Contact Us"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
