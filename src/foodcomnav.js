import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"; 
const Foodcomnav=()=>{
    return(
        <>
        <div style={{ display: "block" }}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">hii Foodcomm</Navbar.Brand>
            <Button align="right" variant="success" size="lg">
            LOGOUT
          </Button>
          </Navbar>
        </div>
        </>
    )
}
export default Foodcomnav;