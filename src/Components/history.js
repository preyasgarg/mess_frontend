import React,{useState,useEffect} from 'react';
import { Paper } from "@material-ui/core";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom';
import NavBar from './Navbar';
const History=()=>{
  
    const [History, setHistory] = useState([]);
  
    useEffect(() => {
      const gethistory = async () => {
        const res = await fetch("http://localhost:8087/gethistory");
        const getdata = await res.json();
        setHistory(getdata);
        // console.log(getdata);
      };
    gethistory();
    },[]);
    return  History.length>0?(
        <>
        <div>
       <NavBar/>
      </div>

        <Paper>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Date</th>
              <th>BREAKFAST</th>
              <th >LUNCH</th>
              <th>DINNER</th>
              <th>credit</th>
            </tr>
          </thead>


          <tbody>
          {History.map((his) => (
                  <tr key={his.date}>
                    <td>{his.breakfast}</td>
                    <td> {his.lunch}</td>
                    <td> {his.dinner}</td>
                    <td>{his.breakfast}*10 +{his.lunch}*30+{his.dinner}*40</td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </Paper>

      <div className="card-footer text-muted">
        The new Tradition is Good Nutrition
      </div>
        
        </>
    ):
    (<div> <NavBar/>no data found</div>)
}


export default History;