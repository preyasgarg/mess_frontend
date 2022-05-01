import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Foodcomnav from "./foodcomnav";
import { Form } from "reactstrap";
import { FormGroup } from "reactstrap";
import Footermail from "./footermail";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
const Setinstruction = () => {
  const [instruction, setinstruction] = useState({});

  function notify(){ 
    toast("Instruction updated successfully!");
  }

  const handleform = (e) => {
    postdatatoserver(instruction);
    e.preventDefault();
    notify();
  };


  const  postdatatoserver= async (data)=>{
    console.log(instruction)
    axios.put("http://c228-103-156-19-229.ngrok.io/updateInstruction/1", {
        "id": 1,
        "instruction1": instruction.instruction1,
        "instruction2": instruction.instruction2,
        "instruction3": instruction.instruction3,
        "instruction4": instruction.instruction4,
       
        },{}).then(
            (response)=>{
                console.log(response);   
            },
            (error)=>{
                console.log(error);
            }
          )
  }


  return (
    <>
      <Foodcomnav/>

      <Card
        border="dark"
        style={{
          padding: "20px",
          height: "60vh",
          width: "300px",
          margin: "20px auto",
        }}
      >
        <Card.Header>Instructions</Card.Header>
        <Card.Body>
          <Card.Text>
            <Form onSubmit={handleform}>
              <FormGroup>
                1.
                <input
                  id="inst1"
                  placeholder="instruction1"
                  onChange={(e) => {
                    setinstruction({
                      ...instruction,
                      instruction1: e.target.value
                    });
                  }}
               / >
              </FormGroup>
              
              <FormGroup>
                2.
                <input
                  id="inst2"
                  placeholder="instruction2"
                  onChange={(e) => {
                    setinstruction({
                      ...instruction,
                      instruction2: e.target.value
                    });
                  }}
               / >
              </FormGroup>
             
              <FormGroup>
                3.
                <input
                  id="inst3"
                  placeholder="instruction3"
                  onChange={(e) => {
                    setinstruction({
                      ...instruction,
                      instruction3: e.target.value
                    });
                  }}
               / >
              </FormGroup>
             
              <FormGroup>
                4.
                <input
                  id="inst4"
                  placeholder="instruction4"
                  onChange={(e) => {
                    setinstruction({
                      ...instruction,
                      instruction4: e.target.value
                    });
                  }}
               / >
              </FormGroup>
             
              <Button variant="success" size="lg" onClick={handleform}>
                submit
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
      <ToastContainer/>
    </>
  );
};
export default Setinstruction;
