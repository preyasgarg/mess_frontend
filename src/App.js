import { Routes ,Route,BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from "./Components/login";
import Signup from "./Components/signup";
import Dashboard from "./Components/dashboard";
import Foodcom from './Components/foodcom';
import MessManager from './Components/messmanager';
import Dashboard2 from "./Components/dashboard2";
import Bar from "./Components/test";
import Todaymenu from './Components/Todaymenu';

const App=() =>   {
  return (
    <div >
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/foodcom' element={<Foodcom/>}/>
            <Route path='/messmanager' element={<MessManager/>}/>
            <Route path='/dashboard2' element={<Dashboard2/>} />
            <Route path='/test' element={<Bar/>}/>
            <Route path='/todaymenu' element={<Todaymenu/>}/>
            

        </Routes>
        </BrowserRouter>
       


    </div>
  );
}

export default App;
