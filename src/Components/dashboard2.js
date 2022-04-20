import React  from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { ShowChart } from "@material-ui/icons";
import Emoji from "../emoji";
// import Emojisliders from "../emojisliders";
const Dashboard2 = () => {
  
  
  return (
    <>
      <div>

          {/* // for navbar creation */}
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="#home">Hii Buddy</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Link  to='/todaymenu'> <Nav.Link to="/todaymenu">Today's Menu</Nav.Link></Link>
              <Link  to='/dashboard'> <Nav.Link to="/dashboard">Select Tomorrow's Menu</Nav.Link></Link>
               <h1>Select City</h1>
    
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
          </Container>
        </Navbar>
      </div>
      

      {/* //default shows background image */}
      <div>
        <h3>Your Feedback is important for us</h3>
        <br/>
        <br/>
        <h2> Rate Your Breakfast</h2>
        {/* <Emojisliders/> */}
        <Emoji/>
        <h2> Rate Your Lunch</h2>
        <div>
        <Emoji/>
      </div>
        <h2> Rate Your Dinner</h2>
        <Emoji/>
        <br/>
        <Button variant="success" size="lg">
          submit
        </Button>
        <br/>
        <br/>
        <h3>Any Suggestion??</h3>
        <div class="form-outline">
        <textarea class="form-control" id="textAreaExample1" rows="4"></textarea>
        <label class="form-label" for="textAreaExample">Message</label>
        </div>
        <Button variant="success" size="lg">
          submit
        </Button>
      </div>
    </>
  );
};
export default Dashboard2;
