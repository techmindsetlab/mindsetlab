import Paragraph from "../components/base/paragraph";

interface Props {
  setIsHovered: (isHovered: boolean) => void;
}

const Home = ({ setIsHovered }: Props) => {
  return (
    <div className="h-[200rem] bg-black">
      <Paragraph
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        text="MINDSETLAB"
        className="mix-blend-difference mt-36 font-bold text-center text-white"
        size="lg"
      />
    </div>
  );
};

export default Home;
