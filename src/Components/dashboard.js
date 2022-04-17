import React from "react";
import { Paper } from "@material-ui/core";
import Card from "./Card";
import Table from "react-bootstrap/Table";

const Dashboard = () => {
  return (
    <div>
      <Paper>
        <h1> Hi SUCHI , What would you like eat tomorrow?</h1>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
          </div>
          <h2>You have added 100 calories today</h2>
        </div>
      </Paper>

      <Paper>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>BREAKFAST</th>
              <th>LUNCH</th>
              <th>DINNER</th>
              <th>COUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <th>COUNT</th>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <th>COUNT</th>
            </tr>
          </tbody>
        </Table>
      </Paper>

      <div className="card-footer text-muted">
        The new Tradition is Good Nutrition
      </div>
    </div>
  );
};
export default Dashboard;
