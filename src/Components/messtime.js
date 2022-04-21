import React from 'react';
import Card from "react-bootstrap/Card";

const Messtime=()=>{
    return(
       <>
       <Card
              border="dark"
              style={{
                padding: 20,
                height: "35vh",
                width: 300,
                margin: "20px auto",
              }}
            >
              <Card.Header>Mess Timing</Card.Header>
              <Card.Body>
                <Card.Text>
                  <strong>Breakfast</strong> : 8:00 am to 9:30 am
                  <br/>
                  <strong>Lunch</strong> : 12:30 pm to 2:00 pm
                  <br/>
                  <strong>Snacks</strong> : 8:00 pm to 9:30 pm
                  <br/>
                  <strong>Dinner</strong> : 8:00 pm to 9:30 pm
                </Card.Text>
              </Card.Body>
            </Card>
      </>
    );
}
export default Messtime;