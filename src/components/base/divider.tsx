import Paragraph from "./paragraph";

interface Props {
  scrollRotation: number;
  isHasText?: boolean;
  text?: string;
}

const Divider = ({ scrollRotation, isHasText = false, text }: Props) => {
  return (
    <div className="flex items-center my-4 lg:my-8">
      <div className="relative lg:h-[4rem] lg:w-[4rem] h-[2rem] w-[2rem] mr-2 flex items-center justify-center">
        <img
          src="/mindsetlab_logo.svg"
          alt="Mindsetlab Logo"
          className="absolute h-[6px] w-[6px] lg:h-[10px] lg:w-[10px]"
        />

        <img
          src="/outer_octagon.svg"
          alt="Outer Octagon Logo"
          className="absolute h-full w-full"
          style={{
            transform: `rotate(${scrollRotation * 0.4}deg)`,
          }}
        />
      </div>
      <div className="border h-fit w-full" />
      {isHasText && (
        <Paragraph className="text-[12px] font-neue-corp-thin text-[#fafafa] w-fit ml-2">
          {text}
        </Paragraph>
      )}
    </div>
  );
};

export default Divider;
