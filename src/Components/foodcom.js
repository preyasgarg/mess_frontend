import { CenterFocusStrong } from "@material-ui/icons";
import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

const Foodcom = () => {
  return (
    <>
      <div>
        <div>
          <h3 style={{}}>Laughter is Brighest where food is best</h3>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Monday</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Tuesday</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Wednesday</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Thursday</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Friday</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Saturday</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Sunday</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
          </tbody>
        </Table>
        <Button variant="success" size="lg">
          UPDATE
        </Button>
        <Button variant="warning" size="lg">
          CLEAR
        </Button>
        <Button variant="danger" size="lg">
          SAVE
        </Button>
      </div>
    </>
  );
};
export default Foodcom;
