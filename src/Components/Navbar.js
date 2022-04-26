import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
const NavBar = () => {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hii Buddy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Button  variant="success" size="lg">
            TodayMenu
          </Button>
            
                
                <Button  variant="success" size="lg"> <Link to="/dashboard2">Select Tomorrow's Menu</Link></Button>
              
              <h1>Select Day</h1>

              <select>
                <option>MONDAY</option>
                <option>TUESDAY</option>
                <option>WEDNESDAY</option>
                <option>THURSDAY</option>
                <option>FRIDAY</option>
                <option>SATURDAY</option>
                <option>SUNDAY</option>
              </select>

              {/* <NavDropdown title="DAY" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">MONDAY</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          TUESDAY
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          WEDNESDAY
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          THURSDAY
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">FRIDAY</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          SATURDAY
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">SUNDAY</NavDropdown.Item>
      </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          <Button variant="success" size="lg">
        Messtime
        </Button>
        <Button variant="success" size="lg">
         Instruction
        </Button>
          <Button align="right" variant="success" size="lg">
            LOGOUT
          </Button>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
