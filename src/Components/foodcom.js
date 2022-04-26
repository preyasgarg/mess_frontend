import { CenterFocusStrong } from "@material-ui/icons";
import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Foodcomnav from "./foodcomnav";


const Foodcom = () => {
  return (
    <>
      <div>
        <Foodcomnav/>
       
        <br/>
        <div>
          <h3 align="center"><i><b>Laughter is Brighest where food is best</b></i></h3>
        </div>  
        <br />
        
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
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>10</td>
              <td>Thornton</td>
              <td>10</td>
              <td>@fat</td>
              <td>10</td>
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
        <div style={{margin:"10px "}} align="center">
        <Button style={{margin:"10px"}} variant="success" size="lg">
          UPDATE
        </Button>
        <Button style={{margin:"10px"}} variant="warning" size="lg">
          CLEAR
        </Button>
        <Button style={{margin:"10px"}} variant="danger" size="lg">
          SAVE
        </Button>
        </div>
      </div>
    </>
  );
};
export default Foodcom;
