import React,{useEffect,useState} from "react";
import { Paper } from "@material-ui/core";
import Card from "./Card";
import Table from "react-bootstrap/Table";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import AlertDismissible from "./AlertDismissible";
import AlertDanger from "./Alertdanger";


const Dashboard = () => {
  const current  = new Date();
  const date=`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  var [dates,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = 24-setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
  

  
  return (
    <div>
      <div>

// for navbar creation
<Navbar
fixed="top"
collapseOnSelect
expand="lg"
bg="dark"
variant="dark"
>
<Container>
  <Navbar.Brand href="">Hii Buddy</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link to='/todaymenu'> <Nav.Link href="#features">Today's Menu</Nav.Link></Link>
     <Link to='/dashboard'> <Nav.Link href="#pricing">Select Tomorrow's Menu</Nav.Link></Link>
     {/* <h1>Select City</h1>
    
    <select>
   <option>MONDAY</option>
   <option>TUESDAY</option>
   <option>WEDNESDAY</option>
   <option>THURSDAY</option>
   <option>FRIDAY</option>
   <option>SATURDAY</option>
   <option>SUNDAY</option>

   </select> */}
      {/* <NavDropdown title="DAY" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">
          MONDAY</NavDropdown.Item>
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
      <Paper>
        <h3>You have only {dates.toLocaleTimeString()} time to select your food</h3>
        
        <br/>
        <br/>
        <h1> Hi Buddy!! , What would you like to eat tomorrow?</h1>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Card img="https://tse1.mm.bing.net/th?id=OIP.huhkxyr1vMlJcsXBN6nu8wHaEK&pid=Api&P=0&w=310&h=174" title="BREAKFAST" />
            </div>
            <div className="col-sm">
              <Card  img="https://tse1.mm.bing.net/th?id=OIP.6O9457MINLHDHpZi-l7FXQHaHa&pid=Api&P=0&w=177&h=177" title="LUNCH"/>
            </div>
            <div className="col-sm">
              <Card img="https://tse3.mm.bing.net/th?id=OIP.GTQh7hIpIUtnxtDRqUosxAHaEK&pid=Api&P=0&w=296&h=166" title="DINNER"/>
            </div>
          </div>

          {/* <AlertDismissible />*/}
          {/* for less calories added by student danger alert */}
          {/* <AlertDanger/> */}
        </div>

      </Paper>

    
       <br/>
        <Button variant="warning" size="lg">
         submit
        </Button>
        <br/>
        <br/>

      <Paper>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>DATE</th>
              <th>BREAKFAST</th>
              <th>LUNCH</th>
              <th>DINNER</th>
              <th>cost/Calories/count</th>
              <th>Cost</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{date}</td>
              <td>56</td>
              <td>7</td>
              <td>78</td>
              <td>20</td>
              <td>20</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>10</td>
              <td>Thornton</td>
              <td>10</td>
              <td>20</td>
            </tr>
          </tbody>
        </Table>
      </Paper>

      <div className="card-footer text-muted">
        The new Tradition is Good Nutrition
      </div>
    </div>
  );
};
export default Dashboard;
