import Button from "./button";

const WorkDetailDivider = () => {
  return (
    <div className="flex items-center my-4 lg:my-8">
      <div className="relative lg:h-[4rem] lg:w-[4rem] h-[2rem] w-[2rem] mr-2 flex items-center justify-center">
        <img
          src="/mindsetlab_logo.svg"
          alt="Mindsetlab Logo"
          className="absolute h-[8px] w-[8px] lg:h-[10px] lg:w-[10px]"
        />

        <img
          src="/outer_octagon.svg"
          alt="Outer Octagon Logo"
          className="absolute h-full w-full"
        />
      </div>
      <div className="border h-fit w-full" />
      <div className=" lg:hidden block">
        <Button
          size="extrasmall"
          isPrimary={false}
          isEnabledArrow={true}
          isSmallButton
          className="text-[8px] text-center ml-2 w-[8rem]"
          text={"View Project"}
        />
      </div>
      <div className="hidden lg:block">
        <Button
          size="extrasmall"
          isPrimary={false}
          isEnabledArrow={true}
          className="text-[12px] text-center ml-2 w-[9rem]"
          text={"View Project"}
        />
      </div>
    </div>
  );
};

export default WorkDetailDivider;
