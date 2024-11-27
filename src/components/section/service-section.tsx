import Button from "../base/button";
import Paragraph from "../base/paragraph";
import Title from "../base/title";

const Service = () => {
  return (
    <div className="bg-[#1E1E1E] lg:px-14 p-5">
      <img
        src="/service_header.svg"
        className="w-full h-full"
        alt="mindsetlab creative"
      />

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
          text={"Tolong diganti dengan copy tentang Mindsetlab"}
        />
        <Paragraph
          size="mini"
          className="font-neue-corp-thin mt-2 lg:text-xl text-[#fafafa]"
        >
          Nah ini penjelasan tambahannya tentang headline diatas yaa, Nah ini
          penjelasan tambahannya tentang headline diatas yaa
        </Paragraph>
      </div>

      <Button
        text={"Our Service"}
        size="small"
        className="w-36 lg:w-64 font-neue-corp-thin  mt-4 px-3 lg:py-2 lg:text-lg py-1.5"
        isEnabledArrow
        variant="secondary"
      />
    </div>
  );
};

export default Service;
