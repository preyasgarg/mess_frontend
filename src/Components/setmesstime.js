import React,{useState} from 'react'
import Messtime from './messtime';
import Button from "react-bootstrap/Button";
import { Card } from 'react-bootstrap';
import Foodcomnav from './foodcomnav';
import {  Form } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import axios from 'axios';
const Setmesstime=()=>{

  const [messtime,setmesstime]=useState({});

  const handleform=(e)=>{
    postdatatoserver(messtime);
    e.preventDefault();
  };

  const  postdatatoserver= async (data)=>{
    console.log(messtime)
    await axios.post("localhost:8085/updateTime" ,data).then(
      (response)=>{
          console.log(response);   
      },
      (error)=>{
          console.log("error");
      }
    )
  }






    return(
     <>
      <div>
        <Foodcomnav/>
       
        <br/>
        </div>
    
         <Card
              border="dark"
              style={{
                padding: 20,
                height: "90vh",
                width: 300,
                margin: "20px auto",
              }}
            >
              <Card.Header>Mess Timing</Card.Header>
              <Card.Body>
                <Card.Text>
                <Form onSubmit={handleform}>
                
                  <strong>Breakfast</strong> :
                  <FormGroup>
                  <input  id="bin" placeholder="breakfastin"
                  onChange={(e)=>{
                  setmesstime({...messtime,breakfastin : e.target.value})
                  }}/>  am to 
                  </FormGroup>
                  <FormGroup>
                  <input  id="bout" placeholder="breakfastout"
                  onChange={(e)=>{
                  setmesstime({...messtime,breakfastout : e.target.value})
                    }}/>pm
                  </FormGroup>
                  <strong>Lunch</strong> : 
                  <FormGroup>
                  <input  id="lin" placeholder="lunchin"
                  onChange={(e)=>{
                  setmesstime({...messtime,lunchin : e.target.value})
                    }}/> pm to 
                  </FormGroup>
                  <FormGroup>
                  <input  id="lout" placeholder="lunchout"
                  onChange={(e)=>{
                    setmesstime({...messtime,lunchout : e.target.value})
                    }}/>pm
                  </FormGroup>
                  <strong>Dinner</strong> :
                  <FormGroup>
                     <input  id="din" placeholder="dinnerin"
                     onChange={(e)=>{
                    setmesstime({...messtime,dinnerin : e.target.value})
                  }}/> pm to
                     </FormGroup> 
                     <FormGroup>
                     <input  id="dout" placeholder="dinnerout"
                     onChange={(e)=>{
                      setmesstime({...messtime,dinnerout: e.target.value})
                      }}/>  pm
                     </FormGroup>
                    
                     <br/>
                     <Button variant="success" size="lg"onClick={handleform}>
                      UPDATE
                     </Button> 
                </Form>
                  
                </Card.Text>
              </Card.Body>
            </Card>
       
     </>
    );
}
export default Setmesstime;