// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Bg from './Component/Bg';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './Component/Signin';
import { dark } from '@mui/material/styles/createPalette';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='black';}
    else
    {
    setMode('light');
    document.body.style.backgroundColor='white';
  }
  }


  return (
    <>
    {/* <Navbar mode={mode} toggleMode={toggleMode}/> */}
   <div className ="Container"  my-3>
   {/* <Login/> */}
     </div> 
    {/* <Bg/> */}
    {/* <Router>
    <Switch>
          <Route path="/Signin">
            <Signin />
          </Route>
          {/* <Route path="/Signup">
            <Signup />
          </Route> */}

        {/* </Switch>
    </Router> */} 
    <Signin/>
    </>
  );
}

export default App;
