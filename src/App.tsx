import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import WorkDetails from "./pages/work-detail";
import Works from "./pages/works";
import Navbar from "./components/section/navbar";
import Cursor from "./components/base/cursor";

const App: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div>
      <Navbar setIsHovered={setIsHovered} />
      <Cursor isHovered={isHovered} />
      <Routes>
        <Route path="/" element={<Home setIsHovered={setIsHovered} />} />
        <Route path="/works" element={<Works />} />
        <Route path="/:id" element={<WorkDetails />} />
      </Routes>
    </div>
  );
};

export default App;
