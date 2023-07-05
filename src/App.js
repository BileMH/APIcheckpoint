
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Navbarr from './components/Navbar';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Admin from './Pages/Admin';
import Profile from './Pages/Profile';
import { useState } from 'react';
import Users from './Pages/Users';



function App() {
  const[isAuth,setAuth]=useState(true)
  return (
    <div className="App">
    <Navbarr/>
    <Routes>
      <Route exact path='/'element={<Home/>} />
      <Route path='/*' element={<Error/>}/>
      {isAuth?<Route path='/admins' element={<Admin/>}/> : <Route path='/*' element={<Error/>}/>}
      <Route path='/profile/:id' element={<Profile/>}/>
      <Route path='/users' element={<Users/>}/>
      
      </Routes>




    
    </div>
  );
}

export default App;
