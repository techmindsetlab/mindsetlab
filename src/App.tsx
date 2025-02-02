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
import ContactPage from "./pages/contact";
import Rundown from "./pages/ofi-project/rundown";
import SafetyBriefing from "./pages/ofi-project/safety-briefing";
import Speakers from "./pages/ofi-project/speakers";
import Questionnaire from "./pages/ofi-project/questionnaire";

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

  const hideNavbarPaths = [
    "/project/ofi/countrymeet2025/rundown",
    "/project/ofi/countrymeet2025/safety-briefing",
    "/project/ofi/countrymeet2025/speakers",
    "/project/ofi/countrymeet2025/questionnaire"
  ];

  const isNavbarHidden = hideNavbarPaths.includes(location.pathname);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          {!isNavbarHidden && <Navbar setIsLink={setIsLink} />}
          <Cursor isLink={isLink} isHovered={isHovered} />
          <AnimatePresence mode="sync">
            <Routes location={location} key={location.key}>
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
              <Route
                path="/contact"
                element={
                  <PageWrapper>
                    <ContactPage scrollRotation={scrollRotation} />
                  </PageWrapper>
                }
              />
              <Route
                path="/project/ofi/countrymeet2025/rundown"
                element={
                  <PageWrapper>
                    <Rundown />
                  </PageWrapper>
                }
              />
              <Route
                path="/project/ofi/countrymeet2025/safety"
                element={
                  <PageWrapper>
                    <SafetyBriefing />
                  </PageWrapper>
                }
              />
              <Route
                path="/project/ofi/countrymeet2025/speakers"
                element={
                  <PageWrapper>
                    <Speakers />
                  </PageWrapper>
                }
              />
              <Route
                path="/project/ofi/countrymeet2025/questionnaire"
                element={
                  <PageWrapper>
                    <Questionnaire />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
          {!isNavbarHidden && (
            <Footer
              onMouseEnter={() => setIsLink(true)}
              onMouseLeave={() => setIsLink(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
