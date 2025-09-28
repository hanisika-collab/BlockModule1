import React from "react";
import AppNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashBoardContent";

const Dashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1">
        <AppNavbar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;