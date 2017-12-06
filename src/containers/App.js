import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom'

// Redux
import { connect } from 'react-redux';
import * as authenticationActions from 'authenticationActions';

// Components
import Header      from 'Header';
import Main        from 'Main';

class App extends Component {

  componentWillMount() {
    const token = localStorage.getItem('auth_token');
    if(token) {
      this.props.authenticateToken(token);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    authenticateToken: token => dispatch(authenticationActions.authenticateToken(token))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
