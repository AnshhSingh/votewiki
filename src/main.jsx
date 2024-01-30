import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Create from './pages/new-user';
import Signup from './pages/login';


const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/create' element={<Create/>}></Route>
      <Route exact path='/signup' element={<Signup/>}></Route>
    </Routes>
  );
}

export default Main;