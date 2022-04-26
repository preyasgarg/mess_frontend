import React  from "react";
import NavBar from "./Navbar";
import Button from "react-bootstrap/Button";
import Card from "./Card";
import { Paper } from "@material-ui/core";
import Table from "react-bootstrap/Table";
import Footermail from "./footermail";



const Dashboard2 = () => {
  const current  = new Date();
  const date=`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  return (
    <>
      <div>
       <NavBar/>
       <br/>
       <br/>
       <br/>
        <h2> Hi Buddy!! , What would you like to eat tomorrow?</h2>
        
       <table>
         <tr>
           <td>
           <Card img="https://tse1.mm.bing.net/th?id=OIP.huhkxyr1vMlJcsXBN6nu8wHaEK&pid=Api&P=0&w=310&h=174" title="BREAKFAST" />
           </td>
           <td>
           <Card img="https://tse1.mm.bing.net/th?id=OIP.huhkxyr1vMlJcsXBN6nu8wHaEK&pid=Api&P=0&w=310&h=174" title="BREAKFAST" />
           </td>
           <td>
           <Card img="https://tse1.mm.bing.net/th?id=OIP.huhkxyr1vMlJcsXBN6nu8wHaEK&pid=Api&P=0&w=310&h=174" title="BREAKFAST" />
           </td>
         </tr>
       </table>

       <Paper>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>DATE</th>
              <th>BREAKFAST</th>
              <th>LUNCH</th>
              <th>DINNER</th>
              <th>cost/Calories/count</th>
              <th>Cost</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{date}</td>
              <td>56</td>
              <td>7</td>
              <td>78</td>
              <td>20</td>
              <td>20</td>
            </tr>
          </tbody>
        </Table>
      </Paper>
       
        <Button variant="warning" size="lg">
         submit
        </Button>
        <br/>
        <Footermail/>
        
        <br/>

      </div>
      
     
     
    </>
  );
};
export default Dashboard2;
