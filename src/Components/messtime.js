import React,{useState,useEffect} from 'react';
import Card from "react-bootstrap/Card";
import axios from 'axios';
import NavBar from './Navbar';
import Footermail from './footermail';

const Messtime=()=>{
  //  const[breakfastin,setbreakfastin]=useState(null);
  //  const[breakfastout,setbreakfastout]=useState(null);
  //  const[lunchin,setlunchin]=useState(null);
  //  const[lunchout,setlunchout]=useState(null);
  //  const[dinnerin,setdinnerin]=useState(null);
  //  const[dinnerout,setdinnerout]=useState(null);
  //  const baseUrl="http://localhost:8084//getMesstime";

  //  useEffect(()=>{axios.get(baseUrl).then((response)=>{
  //   console.log(response.data);
  //   setbreakfastin(response.breakfastin)
  //   setbreakfastout(response.breakfastout)
  //   setlunchin(response.lunchin)
  //   setlunchout(response.lunchout)
  //   setdinnerin(response.dinnerin)
  //   setdinnerout(response.dinnerout)
   
  //  })},[])
  console.clear();
            fetch("http://localhost:8084/getMesstime",{
              method:"GET",
          })
              .then((response) => response.json())
              .then((response)=>{
                  console.log(response);
                  console.log(response[0]);
                  // breakfastcount = response[0];
                  document.getElementById("brkin").innerText = response.breakfastin;
                  document.getElementById("brkout").innerText = response.breakfastout;
                  document.getElementById("lnchin").innerText = response.lunchin;
                  document.getElementById("lnchout").innerText = response[4];
                  document.getElementById("dinrin").innerText = response[5];
                  document.getElementById("dinrout").innerText = response[6];
              })
    return(
     


       <>
       <NavBar/>
       <br/>
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
                  <br/>
                  <strong>Breakfast</strong> : <span  id="brkin"></span> am to <span  id="brkout"></span> am
                  <br/>
                  <strong>Lunch</strong> : <span  id="lnchin"></span> pm to <span  id="lnchout"></span> pm
                  <br/>
                  <strong>Dinner</strong> : <span  id="dinrin"></span> pm to <span  id="dinrout"></span> pm
                  <br/>
                </Card.Text>
              </Card.Body>
            </Card>
            <Footermail/>
      </>
    );
}
export default Messtime;