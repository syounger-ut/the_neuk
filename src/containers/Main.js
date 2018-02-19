import React, { Component } from 'react'
import { Route, Switch }    from 'react-router-dom'

import Home           from 'Home';
import Authentication from 'Authentication';
import User           from 'User';
import Bookings       from 'Bookings';
import Pay            from 'Pay';
import About          from 'About';
import Admin          from 'Admin';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'   component={Home}/>
        <Route path='/authentication' component={Authentication}/>
        <Route path='/about' component={About}/>
        <Route path='/user'     component={User}/>
        <Route path='/bookings' component={Bookings}/>
        <Route path='/pay'      component={Pay}/>
        <Route path='/admin'    component={Admin}/>
      </Switch>
    );
  }
}

export default Main;
