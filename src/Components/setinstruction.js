import React from 'react';
import Instruction from './Instruction';
import Button from "react-bootstrap/Button"; 
const Setinstruction=()=>{
    return(
      <>
      <Instruction/>
      <Button variant="success" size="lg">
         submit
        </Button>
      </>
    );
}
export default Setinstruction;