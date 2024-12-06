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
      <div className="flex items-center">
        <Title
          className="text-white text-2xl lg:text-[4rem] lg:leading-[4.5rem]"
          text="Proof’s in the Pixels."
        />
        <div className="border h-fit mt-6 w-[5rem]" />
      </div>

      <MasonryGrid
        scrollRotation={scrollRotation}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
};

export default Works;
