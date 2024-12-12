import MasonryGrid from "../base/masonry";
import Title from "../base/title";
import BottomAnimation from "../../animation/from-bottom";
import { WorksList } from "../../types/home";

interface Props {
  scrollRotation: number;
  onMouseEnter: React.MouseEventHandler<HTMLParagraphElement>;
  onMouseLeave: React.MouseEventHandler<HTMLParagraphElement>;
  data: WorksList[];
}

const Works = ({ scrollRotation, onMouseLeave, onMouseEnter, data }: Props) => {
  return (
    <div>
      <div className="flex items-center">
        <BottomAnimation duration={1.5}>
          <Title
            className="text-white text-2xl lg:text-[4rem] lg:leading-[4.5rem]"
            text="Proof’s in the Pixels."
          />
        </BottomAnimation>

        <div className="border h-fit mt-6 w-[5rem]" />
      </div>
      <BottomAnimation duration={2.4}>
        <MasonryGrid
          scrollRotation={scrollRotation}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          data={data}
        />
      </BottomAnimation>
    </div>
  );
};

export default Works;
