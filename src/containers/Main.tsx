import * as React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './Home';
import Authentication from './Authentication';
import User from './User';
import Bookings from './Bookings';
import Pay from './Pay';
import About from './About';
import Admin from './Admin';

class Main extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/authentication' element={<Authentication />} />
        <Route path='/about' element={<About />} />
        <Route path='/user' element={<User />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    );
  }
}

export default Main;
