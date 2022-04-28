import React from 'react';
import Instruction1 from './setinstruction1';
import Button from "react-bootstrap/Button"; 
import Card from "react-bootstrap/Card";
import NavBar from './Navbar';
import Footermail from './footermail';
import axios from 'axios';
const Setinstruction=()=>{
 
    return(
      <>
       <NavBar/>
         <Card
              border="dark"
              style={{
                padding: 20,
                height: "40vh",
                width: 300,
                margin: "20px auto",
              }}
            >
              <Card.Header>Instructions</Card.Header>
              <Card.Body style>
                <Card.Text>
                  1. <input  id="inst1"></input>
                  <br/>
                  
                 2. <input  id="inst2"></input>
                  <br/>
                  
                 3.<input  id="inst3"></input>
                  <br/>
                  
                  4.<input  id="inst4"></input>
                  <br/>
                  

                </Card.Text>
              </Card.Body>
            </Card>
            <Footermail/>
       <Button 
      variant="success" size="lg">
         submit
        </Button>
      </>
    );
    }
export default Setinstruction;