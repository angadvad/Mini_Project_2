import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import ParkingList from '../components/ParkingList';
import Login from '../components/Login';
import Signup from '../components/Signup';

export const AppRoutes = (props) => {
  return (
    <Routes>
      <Route exact path='/' element={<Home {...props} />} />
      <Route path='/home' element={<Home {...props}/>} />
      <Route path='/login' element={<Login {...props} />} />
      <Route path='/signup' element={<Signup {...props} />} />
      <Route path='/dashboard/' element={<Dashboard {...props} />} />
      <Route path='/parkinglist/' element={<ParkingList {...props} />} />
      
    </Routes>
  )
}