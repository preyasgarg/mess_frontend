import React, { useState,useEffect} from 'react';
import Card from "react-bootstrap/Card";
import axios from 'axios';
import NavBar from './Navbar';


const Instruction=()=>{
  const[Instruction,setInstruction]=useState(null);
  const baseUrl="localhost:8084/";
  
  useEffect(()=>{axios.get(baseUrl).then((response)=>{
   console.log(response.data);
   setInstruction(response.instruction)
  })},[])

  
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