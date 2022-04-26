import React,{useState,useEffect} from 'react';
import Card from "react-bootstrap/Card";
import axios from 'axios';
import NavBar from './Navbar';

const Messtime=()=>{
   const[breakfastin,setbreakfastin]=useState(null);
   const[breakfastout,setbreakfastout]=useState(null);
   const[lunchin,setlunchin]=useState(null);
   const[lunchout,setlunchout]=useState(null);
   const[snacksin,setsnacksin]=useState(null);
   const[snacksout,setsnacksout]=useState(null);
   const[dinnerin,setdinnerin]=useState(null);
   const[dinnerout,setdinnerout]=useState(null);
   const baseUrl="localhost:8084/";
  
   useEffect(()=>{axios.get(baseUrl).then((response)=>{
    console.log(response.data);
    setbreakfastin(response.breakfastin)
    setbreakfastout(response.breakfastout)
    setlunchin(response.lunchin)
    setlunchout(response.lunchout)
    setsnacksin(response.snacksin)
    setdinnerin(response.dinnerin)
    setdinnerout(response.dinnerout)
   })},[])
    return(
       <>
       
       <NavBar/>
       <br/>
       <Card
              border="dark"
              style={{
                padding: 20,
                height: "60vh",
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
      </>
    );
}
export default Messtime;