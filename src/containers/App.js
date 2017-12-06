import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom'

// Components
import Header      from 'Header';
import Main        from 'Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default withRouter(App);
