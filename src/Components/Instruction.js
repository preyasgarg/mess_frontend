import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import axios from 'axios';


const Instruction=()=>{
  const[Instruction,setInstruction]=useState(null);
  const baseurl="";


  
    return(
      <>
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
              <Card.Body>
                <Card.Text>
                  <p></p>
                  <br/>
                  <br/>
                  <p></p>
                  <br/>
                  <br/>
                  <p></p>
                  <br/>
                  <br/>
                  <p></p>
                  <br/>
                  <br/>
                  

                </Card.Text>
              </Card.Body>
            </Card>
      </>

    );
}
export default Instruction;