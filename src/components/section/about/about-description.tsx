import BottomAnimation from "../../../animation/from-bottom";
import Paragraph from "../../base/paragraph";

const AboutDescription = () => {
  return (
    <div className="px-5 my-4 lg:my-10 lg:px-12 ">
      <div className="flex gap-4 items-center">
        <BottomAnimation wrapperStyle="w-[46%]" duration={1.3}>
          <Paragraph
            style={{ lineHeight: "1.2" }}
            size="ultra"
            className="text-[#FAFAFA] lg:text-[8rem] line text-[3rem]"
          >
            We are
          </Paragraph>
        </BottomAnimation>
        <BottomAnimation wrapperStyle="w-[50%]" duration={1.6}>
          <Paragraph
            size="extrasmall"
            className="text-[#FAFAFA] lg:text-3xl leading-3 font-neue-corp-thin"
          >
            an independent agency with a deep skill set, big ideas, lots of
            heart and a global reputation.
          </Paragraph>
        </BottomAnimation>
      </div>
      <div className="flex pt-6 gap-4 items-end">
        <div className="w-[46%] mb-8 flex flex-col gap-6">
          <BottomAnimation>
            <img
              src="/gradient_octagon.svg"
              className="w-[2rem] lg:w-[4rem] relative top-0 h-full"
            />
          </BottomAnimation>

          <BottomAnimation duration={1.6}>
            <Paragraph
              size="extrasmall"
              className="text-[#FAFAFA] lg:w-[80%] lg:text-2xl leading-3 font-neue-corp-thin"
            >
              Senior work in a small package. That’s the whole point of working
              with a studio like us, and that’s what we deliver. Great work,
              focused, low overhead. But small doesn’t mean one-size-fits-all.
              Small studios also mean niche, custom, and fresh. When the project
              calls for it, we bring on specialists from our ever-growing
              creative network. Your project scales to meet the challenge, no
              more, no less.
            </Paragraph>
          </BottomAnimation>
        </div>

        <BottomAnimation wrapperStyle="w-[50%]" duration={1.3}>
          <Paragraph
            style={{ lineHeight: "1.2" }}
            size="ultra"
            className="text-[#FAFAFA] lg:text-[6.8rem] line leading-[2rem] text-[3rem]"
          >
            Plug & Play, or Custom Built.
          </Paragraph>
        </BottomAnimation>
      </div>
    </div>
  );
};

export default AboutDescription;
