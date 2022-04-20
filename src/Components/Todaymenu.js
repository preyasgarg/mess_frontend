import React from 'react';
import { Paper } from "@material-ui/core";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom';
const Todaymenu=()=>{
    return (
        <>
        <div>


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
      <Nav.Link href="#features">Today's Menu</Nav.Link>
     <Link to='/dashboard'> <Nav.Link href="#pricing">Select Tomorrow's Menu</Nav.Link></Link>
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

<br/>
<br/>
<br/>
<br/>
        <Paper>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>DISH NO.</th>
              <th colSpan={2}>BREAKFAST</th>
              <th colSpan={2}>LUNCH</th>
              <th colSpan={2}>DINNER</th>
            </tr>
          </thead>

          <thead>
            <tr>
              <th></th>
              <th>Items</th>
              <th>calories</th>
              <th>Items</th>
              <th>calories</th>
              <th>Items</th>
              <th>calories</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>10</td>
              <td>Otto</td>
              <td>20</td>
              <td>@mdo</td>
              <td>30</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>10</td>
              <td>Thornton</td>
              <td>10</td>
              <td>@fat</td>
              <td>10</td>
            </tr>
          </tbody>
        </Table>
      </Paper>

      <div className="card-footer text-muted">
        The new Tradition is Good Nutrition
      </div>
        
        </>
    )
}


export default Todaymenu;