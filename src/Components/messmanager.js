import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import { Grid, Paper } from "@material-ui/core";
import Button from "react-bootstrap/Button";  
import Card from "react-bootstrap/Card";
import Graph from "./graph";

const MessManager = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };
  return (
    <>
      <div>
        {/* navbar of messmanager */}
        <div style={{ display: "block" }}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Manager Dashboard</Navbar.Brand>
            <Button align="right" variant="success" size="lg">
            LOGOUT
          </Button>
          </Navbar>
        </div>
        <br />


        
        {/* subheading of messmanager */}
        <div style={{ display: "block", backgroundColor: "#00cccc" }}>
          <Navbar variant="light">
            <h3> Cooking with love provides food for the soul </h3>
          </Navbar>
        </div>



        {/* graph showing and count of plates for food */}
        {/* graph */}
        <table>
          <tr>
            <td>
              <Paper elevation={10} style={paperStyle}>
                <Grid>
                  <Graph/>
                </Grid>
              </Paper>
            </td>

           
            {/* count of plates of foood */}
            <td>
              <Paper elevation={10} style={paperStyle}>
                <Grid>
                  <h2>
                    <i>SUMMARY</i>
                  </h2>
                  <br />
                  <br />
                  <h4>Breakfast Plate count: 23</h4>
                  <br />
                  <h4>Lunch Plate count: 23</h4>
                  <br />
                  <h4>Dinner Plate count: 23</h4>
                </Grid>
              </Paper>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default MessManager;
