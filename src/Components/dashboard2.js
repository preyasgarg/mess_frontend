import React from "react";
import {Paper} from '@material-ui/core'

const Dashboard2=()=>{
    return (
       <div>
           <Paper>
        <div>
        <h1>The new Tradition is Good Nutrition</h1> <br/>  
        </div>
           
        <h2>Tomorrow's Meal</h2>
                   
  <table>
  <tr>
  
  <input type="checkbox" id="breakfast" name="breakfast" value="1"/>
  <label for="breakfast"> BREAKFAST</label><br/>
 
  <div className="hide">I am shown when someone hovers over the div above.</div>
  
  </tr>
  <tr>
  <input type="checkbox" id="lunch" name="lunch" value="1"/>
  <label for="lunch"> LUNCH</label><br/>
  </tr>
  <tr>
  <input type="checkbox" id="dinner" name="dinner" value="1"/>
  <label for="dinner"> DINNER </label><br/><br/>
  </tr>
  <tr>
  <input type="submit" value="Submit"/>
  </tr>
  </table>
  
                   
                   
              
           </Paper>
       </div>
    )
}
export default Dashboard2;

