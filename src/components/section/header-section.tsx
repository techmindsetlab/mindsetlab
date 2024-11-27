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
      <img
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        src="/mindsetlab_header_logo.svg"
        alt="Mindsetlab Creative Logo Header"
        className={`h-full w-full mt-[6rem] lg:mt-[8rem] transition-transform duration-300`}
        style={{
          transform: `scaleX(${scale})`, // Stretch menyamping
        }}
      />

      {/* COPY MINDSETLAB */}
      <div className="flex justify-between items-center mt-4 lg:my-12">
        <div className="lg:w-full w-[75%]">
          <Paragraph
            size="xxl"
            className="text-white leading-7 text-2xl lg:text-5xl"
          >
            Tolong diganti copy <br className="block lg:hidden" /> tentang
            Mindsetlab
          </Paragraph>
          <Paragraph
            size="sm"
            className="text-white text-sm lg:text-xl mt-2 font-neue-corp-thin leading-4"
          >
            Nah ini penjelasan tambahannya tentang headline diatas yaa{" "}
            <br className="block lg:hidden" /> Nah ini penjelasan tambahannya
            tentang headline diatas yaa
          </Paragraph>
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
      <div className="border mt-8 rounded-md px-3 lg:px-5 py-1 border-white bg-white">
        <img src="/boy_cap.svg" className="w-[50px] h-[50px] lg:w-[10rem] lg:h-[10rem]" alt="boy cap" />
        <Title
          text="Tolong digantikan dengan copywriting bertanya kebutuhan
          client/audiense yang masuk website ini."
          className="text-[15px] lg:text-3xl w-[80%] mt-1 lg:mt-3 leading-4"
        />
        <Paragraph size="mini" className="my-1.5 lg:my-3 w-[80%] text-[8px] lg:text-2xl font-neue-corp-thin leading-4">
          Embel embel untuk ngajak audiense kontak kita yaa
        </Paragraph>
        <Button
          variant="primary"
          size="extrasmall"
          isEnabledArrow
          className="w-full lg:text-2xl font-neue-corp-thin px-2 lg:py-3 lg:mb-3 py-1"
          text={"Button Contact Us"}
        />
      </div>
    </div>
  );
};

export default Header;
