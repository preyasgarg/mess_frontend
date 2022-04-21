import React from 'react'
import Messtime from './messtime';
import Button from "react-bootstrap/Button";
import Foodcomnav from '../foodcomnav';
const Setmesstime=()=>{
    return(
     <>
     <Foodcomnav/>  
     <Messtime/>
     <Button variant="success" size="lg">
          UPDATE
        </Button>
     </>
    );
}
export default Setmesstime;