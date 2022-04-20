import React from "react";
import { Paper } from '@material-ui/core'
import Dropdown from "react-bootstrap/Dropdown";

const Card = (props) => {
  
  const paperStyle={padding :20,height:'70vh',width:400, margin:"20px auto"}
  return (
    
    <Paper style={paperStyle}>
    <div className="card" style={{width:"18rem"}}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
       
        
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            view menu/calories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">DAL||24</Dropdown.Item>
            <Dropdown.Item href="#/action-2">CHAPATI||22</Dropdown.Item>
            <Dropdown.Item href="#/action-3">RASAM||56</Dropdown.Item>
            <Dropdown.Item href="#/action-3">SAMBAR||78</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      
      <br/>
      <br/>
     
      

        <a href="#" className="btn btn-success" >
          Add in Your Food
        </a>
        <a href="#" className="btn btn-success" style={{marginLeft:"10px"}}>
          Clear
        </a>
      </div>
    </div>
    </Paper>
  );
};
export default Card;
