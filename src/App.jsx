import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AgentManagement from "./pages/AgentManagement";
import MentorManagement from "./pages/MentorManagement";
import LMSLearning from "./pages/LMSLearning";
import LeadManagement from "./pages/LeadManagement";
import ProjectManagement from "./pages/ProjectManagement";
import DeveloperBuilder from "./pages/DeveloperBuilder";
import Commission from "./pages/Commission";
import ReportsInsights from "./pages/ReportsInsights";
import SystemLogs from "./pages/SystemLogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/agent-management" element={<AgentManagement />} />
        <Route path="/mentor-management" element={<MentorManagement />} />
         <Route path="/lms-learning" element={<LMSLearning />} />
         <Route path="/lead-management" element={<LeadManagement />} />
         <Route path="/project-management" element={<ProjectManagement />} />
         <Route path="/developer-builder" element={<DeveloperBuilder />} />
         <Route path="/commission-management" element={<Commission />} />
         <Route path="/reports-insights" element={<ReportsInsights />} />
         <Route path="/system-logs" element={<SystemLogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
