import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getUser } from '../utils/auth';

export default function AppNavbar() {
  const user = getUser();

  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">CHRIS</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {user && (
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/events">Events</Nav.Link>
              <Nav.Link as={Link} to="/messages">Messages</Nav.Link>
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
              <Nav.Link onClick={() => { localStorage.clear(); window.location.href = '/'; }}>
                Logout
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
