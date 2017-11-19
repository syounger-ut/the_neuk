import React, { Component } from 'react'
import { Route, Switch, withRouter }    from 'react-router-dom'

import { connect }      from 'react-redux'
import * as userActions from '../actions/userActions';

import Login    from 'Login';
import User     from 'User';
import Bookings from 'Bookings';
import Pay      from 'Pay';
import Home     from 'Home';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/'   component={Home}/>
          <Route path='/login'    component={Login}/>
          <Route path='/user'     component={User}/>
          <Route path='/bookings' component={Bookings}/>
          <Route path='/pay'      component={Pay}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
