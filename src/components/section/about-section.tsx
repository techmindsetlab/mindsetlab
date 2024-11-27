import Button from "../base/button";
import Paragraph from "../base/paragraph";
import Title from "../base/title";

const About = () => {
  return (
    <div className="py-8 lg:px-14 px-5 bg-[#FAFAFA]">
      <div className="w-[80%]">
        <Title
          text="Tolong diganti copy tentang Mindsetlab"
          headerSize="text-[24px]"
          className="font-neue-corp-bold lg:text-5xl text-[#1e1e1e] leading-6 uppercase"
        />
      </div>
      <Paragraph size="sm" className="mt-2 lg:text-2xl font-neue-corp-thin">
        Nah ini penjelasan tambahannya tentang headline diatas yaa, <br className="hidden lg:block"/> Nah ini
        penjelasan tambahannya tentang headline diatas yaa
      </Paragraph>
      <Button
        text={"About Us"}
        size="small"
        className="w-36 lg:w-64 font-neue-corp-thin mt-4 px-3 lg:py-2 lg:text-lg py-1.5"
        isEnabledArrow
      />
    </div>
  );
};

export default About;