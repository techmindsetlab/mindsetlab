import Paragraph from "../base/paragraph";

interface Props {
  highlightVideo: string | undefined;
  videoText: string | undefined;
}

const HighlightVideo = ({ highlightVideo, videoText }: Props) => {
  return (
    <div className="px-4 lg:px-8">
      <div className="w-full lg:h-[45rem] h-[14rem]">
        <video
          src={highlightVideo}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="mt-6 justify-between flex">
        <Paragraph className="text-[#FAFAFA] w-[50%]">{videoText}</Paragraph>
        <div className="flex lg:hidden relative mb-12 w-[40%] justify-center">
          <img src="/phone_frame.svg" />
          <div className="absolute top-4 rounded-md w-[85%] lg:w-[90%] lg:h-[65vh] h-[55vh] overflow-hidden">
            <video
              src={highlightVideo}
              className="w-full h-[47%] object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightVideo;
