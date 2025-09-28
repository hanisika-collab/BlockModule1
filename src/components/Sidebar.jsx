import React from "react";
import { ListGroup } from "react-bootstrap";
import { HouseDoor, People, Gear, ClipboardCheck, Upload } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="bg-primary text-white p-3"
      style={{
        width: "250px",
        height: "100vh",
        overflowY: "auto",
        backgroundColor: "#0d6efd",
        color: "white",
        padding: "20px",
      }}
    >
      <h4 className="fw-bold mb-4">Dashboard</h4>
      <ListGroup variant="flush">
        <ListGroup.Item action className="bg-primary text-white border-0">
          <Link to="/dashboard" className="text-white text-decoration-none">
            <HouseDoor className="me-2" /> Home
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action className="bg-primary text-white border-0">
          <Link to="/dashboard/upload" className="text-white text-decoration-none">
            <Upload className="me-2" /> Upload Document
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action className="bg-primary text-white border-0">
          <Link to="/dashboard/tasks" className="text-white text-decoration-none">
            <ClipboardCheck className="me-2" /> Tasks
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action className="bg-primary text-white border-0">
          <Link to="/dashboard/users" className="text-white text-decoration-none">
            <People className="me-2" /> Users
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action className="bg-primary text-white border-0">
          <Link to="/dashboard/settings" className="text-white text-decoration-none">
            <Gear className="me-2" /> Settings
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
