import { CenterFocusStrong } from "@material-ui/icons";
import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
 
const Foodcom=()=>{
    return(
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
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

          
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>DISH NO.</th>
      <th>BREAKFAST</th>
      <th>LUNCH</th>
      <th>DINNER</th>
    </tr>
  </thead>

  <tbody>
      
    <tr>
      <td>1</td>
      <td>Mark</td>    
      <td>Otto</td>     
      <td>@mdo</td>     
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
   
  </tbody>
</Table>
<Button variant="success" size="lg">UPDATE</Button>{' '}
<Button variant="warning" size="lg">CLEAR</Button>{' '}
<Button variant="danger" size="lg">SAVE</Button>
      </div>
      </>
    )
}
export default Foodcom;
