import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AgentManagement from "./pages/AgentManagement";
import MentorManagement from "./pages/MentorManagement";
import LMSLearning from "./pages/LMSLearning";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/agent-management" element={<AgentManagement />} />
        <Route path="/mentor-management" element={<MentorManagement />} />
         <Route path="/lms-learning" element={<LMSLearning />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
