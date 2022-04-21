import React from 'react';
import { Paper } from "@material-ui/core";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom';
import NavBar from './Navbar';
const Todaymenu=()=>{
    return (
        <>
        <div>
       <NavBar/>
      </div>
<br/>
<br/>
<br/>
<br/>
        <Paper>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>DISH NO.</th>
              <th colSpan={2}>BREAKFAST</th>
              <th colSpan={2}>LUNCH</th>
              <th colSpan={2}>DINNER</th>
            </tr>
          </thead>

          <thead>
            <tr>
              <th></th>
              <th>Items</th>
              <th>calories</th>
              <th>Items</th>
              <th>calories</th>
              <th>Items</th>
              <th>calories</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>10</td>
              <td>Otto</td>
              <td>20</td>
              <td>@mdo</td>
              <td>30</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>10</td>
              <td>Thornton</td>
              <td>10</td>
              <td>@fat</td>
              <td>10</td>
            </tr>
          </tbody>
        </Table>
      </Paper>

      <div className="card-footer text-muted">
        The new Tradition is Good Nutrition
      </div>
        
        </>
    )
}


export default Todaymenu;