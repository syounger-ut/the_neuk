import React, { Component } from 'react'
import { Route, Switch }    from 'react-router-dom'

import Login    from 'Login';
import Bookings from 'Bookings';
import Pay      from 'Pay';
import Home     from 'Home';

class Main extends React.Component {
  handleLogin(response) {
    this.props.isLogggedIn(response)
  }
  render() {
    const isLoggedIn = this.props.handleUserLogin;
    return (
      <main>
        <Switch>
          <Route exact path='/'   component={Home}/>
          <Route path='/login'    component={Login}/>
          <Route path='/bookings' component={Bookings}/>
          <Route path='/pay'      component={Pay}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
