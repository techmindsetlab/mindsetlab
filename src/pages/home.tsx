import Header from "../components/section/header-section";
import Divider from "../components/base/divider";
import Works from "../components/section/works-section";
import About from "../components/section/about-section";
import Service from "../components/section/service-section";
import Contact from "../components/section/contact-section";
import { WorksList } from "../types/home";

interface Props {
  setIsHovered: (isHovered: boolean) => void;
  scrollRotation: number;
  scale: number;
  data: WorksList[];
}

const Home = ({ setIsHovered, scrollRotation, scale, data }: Props) => {
  return (
    <div>
      <div className="lg:px-12 px-5">
        <Header scrollRotation={scrollRotation} scale={scale} />
        <Divider scrollRotation={scrollRotation} />
        <Works
          scrollRotation={scrollRotation}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data={data}
        />
      </div>
      <div>
        <About />
        <Service scrollRotation={scrollRotation} />
        <Contact
          scrollRotation={scrollRotation}
          typography={
            "Got an idea that’s fire or just wanna collab on something epic?"
          }
        />
      </div>
    </div>
  );
};

export default Home;
