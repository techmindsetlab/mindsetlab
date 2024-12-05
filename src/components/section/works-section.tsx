import MasonryGrid from "../base/masonry";
import Title from "../base/title";

interface Props {
  scrollRotation: number;
  onMouseEnter: React.MouseEventHandler<HTMLParagraphElement>;
  onMouseLeave: React.MouseEventHandler<HTMLParagraphElement>;
}

const Works = ({ scrollRotation, onMouseLeave, onMouseEnter }: Props) => {
  return (
    <div>
      <Title
        className="text-white text-xl lg:text-[4rem] lg:leading-[4.5rem]"
        text="Tolong diganti copy headline ‘all works’ yang keren banget._"
      />
      <MasonryGrid
        scrollRotation={scrollRotation}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
};

export default Works;
