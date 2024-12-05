import Header from "../components/section/header-section";
import Divider from "../components/base/divider";
import Works from "../components/section/works-section";
import About from "../components/section/about-section";
import Service from "../components/section/service-section";
import Contact from "../components/section/contact-section";

interface Props {
  setIsHovered: (isHovered: boolean) => void;
  scrollRotation: number;
  scale: number;
}

const Home = ({ setIsHovered, scrollRotation, scale }: Props) => {
  return (
    <div className="w-screen">
      <div className="px-5 lg:max-w-[85rem] max-w-full mx-auto">
        <Header
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          scrollRotation={scrollRotation}
          scale={scale}
        />
        <Divider scrollRotation={scrollRotation} />
        <Works
          scrollRotation={scrollRotation}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div className="mt-6">
        <About />
        <Service scrollRotation={scrollRotation} />
        <Contact scrollRotation={scrollRotation} />
      </div>
    </div>
  );
};

export default Home;
