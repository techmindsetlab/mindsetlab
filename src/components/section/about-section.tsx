import Button from "../base/button";
import Paragraph from "../base/paragraph";
import Title from "../base/title";
import BottomAnimation from "../../animation/from-bottom"

const About = () => {
  return (
    <div className="py-8 lg:py-10 lg:px-12 lg:space-y-10 px-5 bg-[#FAFAFA]">
      <div className="w-[80%] lg:w-[70%]">
        <Title
          text="innovation"
          headerSize="text-[28px]"
          className="font-neue-corp-bold lg:text-[4rem] lg:leading-[4rem] text-[#1e1e1e] leading-6 uppercase"
        />
        <Title
          text="with a twist"
          headerSize="text-[28px]"
          className="font-neue-corp-bold lg:text-[4rem] mt-1 lg:leading-[4rem] text-[#1e1e1e] leading-6 uppercase"
        />
      </div>
      <BottomAnimation>
        <Paragraph
          size="sm"
          className="mt-4 lg:text-2xl text-sm leading-4 font-neue-corp-thin"
        >
          At Mindset Lab, we’re all about pushing boundaries and making things
          happen. We take your brand’s identity and give it the spark it needs
          to stand out in a crowded digital world. No cookie-cutter
          solutions—giving creativity and creativity only.
        </Paragraph>
      </BottomAnimation>

      <Button
        text={"In Case You Missed It"}
        className="w-44 lg:w-64 font-neue-corp-thin mt-6 px-3 lg:py-2 lg:text-lg text-[12px]"
        isEnabledArrow
      />
    </div>
  );
};

export default About;
