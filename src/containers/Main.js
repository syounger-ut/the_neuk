import React, { Component } from 'react'
import { Route, Switch }    from 'react-router-dom'

import Home           from 'Home';
import Authentication from 'Authentication';
import User           from 'User';
import Bookings       from 'Bookings';
import Pay            from 'Pay';
import About          from 'About';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'   component={Home}/>
        <Route path='/Authentication' component={Authentication}/>
        <Route path='/About' component={About}/>
        <Route path='/user'     component={User}/>
        <Route path='/bookings' component={Bookings}/>
        <Route path='/pay'      component={Pay}/>
      </Switch>
    );
  }
}

export default Main;
