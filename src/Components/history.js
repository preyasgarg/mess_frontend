import React from 'react';
import { Paper } from "@material-ui/core";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom';
import NavBar from './Navbar';
const History=()=>{
    return (
        <>
        <div>
       <NavBar/>
      </div>

        <Paper>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Date</th>
              <th colSpan={2}>BREAKFAST</th>
              <th colSpan={2}>LUNCH</th>
              <th colSpan={2}>DINNER</th>
              <th colSpan={2}>credit</th>
            </tr>
          </thead>


          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>10</td>
              <td>10</td>
              
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>10</td>
              <td>10</td>
            </tr>
               <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>10</td>
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


export default History;