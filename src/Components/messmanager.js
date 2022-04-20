import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import { Grid, Paper } from "@material-ui/core";
import { VictoryPie } from "victory-pie";
import Card from "react-bootstrap/Card";

const MessManager = () => {
  const myData = [
    { x: "PHP", y: 900 },
    { x: "Python", y: 400 },
    { x: "Javascript", y: 300 },
  ];
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };
  return (
    <>
      <div>
        <div style={{ display: "block" }}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Manager Dashboard</Navbar.Brand>
          </Navbar>
        </div>
        <br />
        <div style={{ display: "block", backgroundColor: "#00cccc" }}>
          <Navbar variant="light">
            <h3> Cooking with love provides food for the soul </h3>
          </Navbar>
        </div>
        <table>
          <tr>
            <td>
              <Paper elevation={10} style={paperStyle}>
                <Grid>
                  <h1>Socail Media Users</h1>
                  <div style={{ height: 400 }}>
                    <VictoryPie
                      data={myData}
                      colorScale={["blue", "yellow", "red"]}
                      radius={100}
                    />
                  </div>
                </Grid>
              </Paper>
            </td>

            <Card
              border="dark"
              style={{
                padding: 20,
                height: "70vh",
                width: 400,
                margin: "20px auto",
              }}
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Dark Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

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
