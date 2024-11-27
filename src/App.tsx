import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import WorkDetails from "./pages/work-detail";
import Works from "./pages/works";
import Navbar from "./components/section/navbar";
import Cursor from "./components/base/cursor";
import LoadingScreen from "./components/section/loading-screen";

const App: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <LoadingScreen />}
      <div>
        <Navbar setIsHovered={setIsHovered} />
        <Cursor isHovered={isHovered} />
        <Routes>
          <Route path="/" element={<Home setIsHovered={setIsHovered} />} />
          <Route path="/works" element={<Works />} />
          <Route path="/:id" element={<WorkDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
