import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import WorkDetails from "./pages/work-detail";
import Works from "./pages/works";
import Navbar from "./components/section/navbar";
import Cursor from "./components/base/cursor";
import LoadingScreen from "./components/section/loading-screen";
import PageWrapper from "./components/base/page-wrapper";
import Footer from "./components/section/footer";
import { workDetail } from "./@data/work-detail";
import { works } from "./@data/works";
import { home } from "./@data/home";

const App: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLink, setIsLink] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const [scrollRotation, setScrollRotation] = useState(0);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
      const calculatedScale = Math.min(maxScale, minScale + scrollY / 1000);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Navbar setIsLink={setIsLink} />
          <Cursor isLink={isLink} isHovered={isHovered} />
          <AnimatePresence mode="sync">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home
                      setIsHovered={setIsHovered}
                      scrollRotation={scrollRotation}
                      scale={scale}
                      data={home.data.works}
                    />
                  </PageWrapper>
                }
              />
              <Route
                path="/works"
                element={
                  <PageWrapper>
                    <Works
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      scale={scale}
                      scrollRotation={scrollRotation}
                      data={works.data}
                    />
                  </PageWrapper>
                }
              />
              <Route
                path="/works/:id"
                element={
                  <PageWrapper>
                    <WorkDetails
                      scrollRotation={scrollRotation}
                      workData={workDetail}
                    />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
          <Footer
            onMouseEnter={() => setIsLink(true)}
            onMouseLeave={() => setIsLink(false)}
          />
        </div>
      )}
    </div>
  );
};

export default App;
