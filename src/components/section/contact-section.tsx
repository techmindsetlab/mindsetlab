import Button from "../base/button";
import Paragraph from "../base/paragraph";

const Contact = () => {
  return (
    <div className="bg-[#FAFAFA] lg:px-14 p-5">
      <img
        src="/contact_header.svg"
        className="w-full h-full"
        alt="mindsetlab creative"
      />

      {/* DIVIDER */}
      <div className="flex gap-2 my-2 items-center">
        <img src="/black_circle.svg" className="w-5 h-5" />
        <div className="border-[0.5px] border-[#1e1e1e] w-full" />
        <Paragraph size="mini" className="text-[#1e1e1e]">
          US
        </Paragraph>
      </div>

      <Paragraph size="xl" className="text-[#1e1e1e] lg:text-3xl w-[80%]">
        Buatkan copy pertanyaan kebutuhan client?
      </Paragraph>

      <Button
        text={"Contact Us"}
        size="small"
        className="w-36 lg:w-64 font-neue-corp-thin mt-4 px-3 lg:py-2 lg:text-lg py-1.5"
        isEnabledArrow
      />
    </div>
  );
};

export default Contact;
