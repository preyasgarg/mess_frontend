import React from 'react'
import Messtime from './messtime';
import Button from "react-bootstrap/Button";
import Foodcomnav from '../foodcomnav';
const Setmesstime=()=>{
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
              <Card.Header>Mess Timing</Card.Header>
              <Card.Body>
                <Card.Text>
                  <strong>Breakfast</strong> : <p>{breakfastin} am to {breakfastout} am</p>
                  <br/>
                  <strong>Lunch</strong> : <p> {lunchin} pm to {lunchout} pm</p>
                  <br/>
                  <strong>Snacks</strong> : <p>{snacksin} pm to {snacksout} pm</p>
                  <br/>
                  <strong>Dinner</strong> : <p>{dinnerin} pm to {dinnerout} pm</p>
                  <br/>
                </Card.Text>
              </Card.Body>
            </Card>
        <Button variant="success" size="lg">
          UPDATE
        </Button>
     </>
    );
}
export default Setmesstime;