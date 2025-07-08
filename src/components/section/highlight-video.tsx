interface Props {
  highlightVideo: string | undefined;
}

const HighlightVideo = ({ highlightVideo }: Props) => {
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
    </div>
  );
};

export default HighlightVideo;
