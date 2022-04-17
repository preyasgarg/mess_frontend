import { Routes ,Route,BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from "./Components/login";
import Signup from "./Components/signup";
import Dashboard from "./Components/dashboard";
import Foodcom from './Components/foodcom';
import MessManager from './Components/messmanager';

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

        </Routes>
        </BrowserRouter>
       


    </div>
  );
}

export default App;
