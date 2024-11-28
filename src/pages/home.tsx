import { useState, useEffect } from "react";
import Header from "../components/section/header-section";
import Divider from "../components/base/divider";
import Works from "../components/section/works-section";
import About from "../components/section/about-section";
import Service from "../components/section/service-section";
import Contact from "../components/section/contact-section";
import Footer from "../components/section/footer";

interface Props {
  setIsHovered: (isHovered: boolean) => void;
}

const Home = ({ setIsHovered }: Props) => {
  const [scrollRotation, setScrollRotation] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrollRotation(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let animationFrame: number;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScale = 1.5;
      const minScale = 1;
      const calculatedScale = Math.min(maxScale, minScale + scrollY / 500);

      animationFrame = requestAnimationFrame(() => {
        setScale(calculatedScale);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

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
        <Works scrollRotation={scrollRotation} />
      </div>
      <div className="mt-6">
        <About />
        <Service scrollRotation={scrollRotation} />
        <Contact scrollRotation={scrollRotation} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
