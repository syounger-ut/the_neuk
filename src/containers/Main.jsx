import React, { Component } from 'react'
import { Route, Switch }    from 'react-router-dom'

import Login    from 'Login';
import User     from 'User';
import Bookings from 'Bookings';
import Pay      from 'Pay';
import Home     from 'Home';

class Main extends React.Component {
  render() {
    const handleUserLogin = this.props.handleUserLogin;
    const user            = this.props.user;
    return (
      <main>
        <Switch>
          <Route exact path='/'   component={Home}/>
          <Route path='/login'    render={routeProps => <Login handleUserLogin={handleUserLogin} />} />
          <Route path='/user'     render={routeProps => <User user={user}/>} />
          <Route path='/bookings' component={Bookings}/>
          <Route path='/pay'      component={Pay}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
