import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"; 
import { Dropdown } from 'react-bootstrap';
const Foodcomnav=()=>{
    return(
        <>
        <div style={{ width:1200 }}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" style={{paddingleft:50 ,margin:10}}>  Hey Foodcomm</Navbar.Brand> 

            <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Monday</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Tuesday</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Wednesday</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Thursday</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Friday</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Saturday</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Sunday</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <table>
          <tr>
            <td>
          <Button href="setmesstime" style={{margin:"10px"}} variant="success" size="lg">
            Settime
           </Button>
           </td>
           <td>
           <Button href="setinstruction" style={{margin:"10px"}} variant="success" size="lg">
            Setinstruction
           </Button>
           </td>
           <td>
            <Button href="login" style={{margin:"10px"}} variant="success" size="lg">
            LOGOUT
           </Button>
           </td>
           </tr>
           </table>
          </Navbar>
        </div>
        </>
    )
}
export default Foodcomnav;