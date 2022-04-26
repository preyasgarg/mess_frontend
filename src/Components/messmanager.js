import React ,{useState,useEffect}from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import { Grid, Paper } from "@material-ui/core";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Graph from "./graph";
import Footermail from "./footermail";

const MessManager = () => {
  //  const[breakfastcount,setbreakfastcount]=useState(null);
  //  const[lunchcount,setlunchcount]=useState(null);
  //  const[dinnercount,setdinnercount]=useState(null);
  //  const baseUrl="localhost:8084/";
  
   let breakfastcount = 0;
   let lunchcount = 0;
   let dinnercount = 0;
  //  useEffect(()=>{axios.get(baseUrl).then((response)=>{
  //   console.log(response.data);
  //   setbreakfastcount(response.breakfast)
  //   setlunchcount(response.lunch)
  //   setdinnercount(response.dinner)
  //  })},[])
    console.clear();
            fetch("http://localhost:8084/getCountplates",{
              method:"GET",
          })
              .then((response) => response.json())
              .then((responseData)=>{
                  console.log(responseData);
                  console.log(responseData[0]);
                  breakfastcount = responseData[0];
                  document.getElementById("brkfast").innerText = responseData[0];
                  lunchcount = responseData[1];
              })

  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 400,
    margin: "30px 50px",
  };
  return (
    <>
      <div>
        {/* navbar of messmanager */}
        <div style={{ display: "block" ,width:1200}}>
          <Navbar bg="dark" variant="dark">
            
            <Navbar.Brand href="#home">Manager Dashboard</Navbar.Brand>
            
           
            <h1>Select Day</h1>

            <select>
              <option>Breakfast-rating</option>
              <option>Lunch-rating</option>
              <option>Dinner-rating</option>
              
            </select>
           
            <Button style={{margin:"10px"}} align="right" variant="success" size="lg" margin="20px">
              LOGOUT
            </Button>
            
          </Navbar>
        </div>
        <br />

        {/* subheading of messmanager */}
        <div style={{ display: "block", backgroundColor: "#00cccc" ,padding: "10x"}}>
          <Navbar variant="light">
            <h3 align="center"> <b>Cooking with love provides food for the soul</b> </h3>
          </Navbar>
        </div>

        {/* graph showing and count of plates for food */}
        {/* graph */}
        <table>
          <tr>
            <td>
              <Paper elevation={7} style={paperStyle}>
                <Grid>
                  <Graph />
                </Grid>
              </Paper>
            </td>

            {/* count of plates of foood */}
            <td>
              <Paper elevation={7} style={paperStyle}  >
                <Grid>
                  <div style={{padding:"20px"}}>
                  <h2>
                  <h1><i><b><ul>SUMMARY</ul></b></i></h1>
                  </h2>
                  <br />
                  <br />
                  <h4>Breakfast Plate count: <span  id="brkfast"></span></h4>
                  <br />
                  <h4 id="lunch">Lunch Plate count: {lunchcount}</h4>
                  <br />
                  <h4>Dinner Plate count: {dinnercount}</h4>
                  </div>
                </Grid>
              </Paper>
            </td>
          </tr>
        </table>
        <Footermail/>
      </div>
    </>
  );
};
export default MessManager;
