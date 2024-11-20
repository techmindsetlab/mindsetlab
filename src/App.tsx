import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import WorkDetails from "./pages/work-detail";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<WorkDetails />} />
      </Routes>
    </div>
  );
};

export default App;
