import MasonryGrid from "../base/masonry";
import Title from "../base/title";

interface Props {
  scrollRotation: number;
}

const Works = ({ scrollRotation }: Props) => {
  return (
    <div>
      <Title
        className="text-white text-xl lg:text-[4rem] lg:leading-[4.5rem]"
        text="Tolong diganti copy headline ‘all works’ yang keren banget._"
      />
      <MasonryGrid scrollRotation={scrollRotation} />
    </div>
  );
};

export default Works;
