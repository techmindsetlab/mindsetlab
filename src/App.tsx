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

const App: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const [scrollRotation, setScrollRotation] = useState(0);

  const location = useLocation();

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
          <Navbar setIsHovered={setIsHovered} />
          <Cursor isHovered={isHovered} />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home
                      setIsHovered={setIsHovered}
                      scrollRotation={scrollRotation}
                      scale={scale}
                    />
                  </PageWrapper>
                }
              />
              <Route
                path="/works"
                element={
                  <PageWrapper>
                    <Works scale={scale} scrollRotation={scrollRotation} />
                  </PageWrapper>
                }
              />
              <Route
                path="/:id"
                element={
                  <PageWrapper>
                    <WorkDetails />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
