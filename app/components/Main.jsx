import React, { Component } from 'react';
import Login from 'Login'

class Main extends React.Component {
  handleAuthToken(token) {
    console.log(token)
  }

  render() {
    return (
      <div>
        <h1>Main</h1>
        <Login authToken={this.handleAuthToken.bind(this)}/>
      </div>
    );
  }
}

export default Main;
