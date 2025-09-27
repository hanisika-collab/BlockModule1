import React from "react";
import { ListGroup } from "react-bootstrap";
import { HouseDoor, People, Gear, ClipboardCheck } from "react-bootstrap-icons";

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
          <HouseDoor className="me-2" /> Home
        </ListGroup.Item>
        <ListGroup.Item action className="bg-primary text-white border-0">
          <ClipboardCheck className="me-2" /> Tasks
        </ListGroup.Item>
        <ListGroup.Item action className="bg-primary text-white border-0">
          <People className="me-2" /> Users
        </ListGroup.Item>
        <ListGroup.Item action className="bg-primary text-white border-0">
          <Gear className="me-2" /> Settings
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
