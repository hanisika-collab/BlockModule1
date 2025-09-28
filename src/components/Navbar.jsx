import React from "react";
import { Navbar, Nav, Form, FormControl, Button,  } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-4 shadow-sm">
      <Navbar.Brand href="#home" className="fw-bold text-primary">
        USER
      </Navbar.Brand>

      {/* Search Bar */}
      <Form className="d-flex ms-auto me-3">
        <FormControl type="search" placeholder="Search" className="me-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>

      {/* User Section */}
      <Nav className="align-items-center">
       
        <img src="/images/Person.jpg" alt="Person" 
          width="50"
          height="50"
          className="rounded-circle me-2"/>
        <Nav.Item className="me-3 fw-semibold">Welcome, User</Nav.Item>
        <Button variant="primary">Logout</Button>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;