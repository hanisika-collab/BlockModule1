import React from "react";
import Sidebar from "./Sidebar";
import DashboardContent from "./DashBoardContent";

const AppLayout = () => {
  return (
    <div style={{
        display: "grid",
        gridTemplateColumns: "250px 1fr",
        height: "100%",
        overflow: "hidden",
      }}
    
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
       
           style={{
          overflowY: "auto",
          height: "100vh",
          backgroundColor: "#f8f9fa",
        }}
        
      >
        <DashboardContent />
      </div>
    </div>
  );
};

export default AppLayout;
