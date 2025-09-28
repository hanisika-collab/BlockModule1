import React from "react";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";

// Import all pages you want to show on right side
import DashboardContent from "./DashBoardContent";
import UploadPage from "./UploadPage";   // <-- new page
import SettingsPage from "./SettingsPage"; // example
import TasksPage from "./TaskPage"
import UserPage from "./UserPage";

const AppLayout = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "250px 1fr",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Sidebar stays fixed */}
      <Sidebar />

      {/* Main Content changes dynamically */}
      <div
        style={{
          overflowY: "auto",
          height: "100vh",
          backgroundColor: "#f8f9fa",
        }}
      >
        <Routes>
          <Route path="dashboard" element={<DashboardContent />} />
          <Route path="upload" element={<UploadPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="users" element={<UserPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppLayout;
