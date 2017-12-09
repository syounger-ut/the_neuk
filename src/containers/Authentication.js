import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as authenticationActions from 'authenticationActions';

// Components
import Login from 'Authentication/Login';
import Register from 'Authentication/Register';

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderLogin: true
    }
    this.toggleLogin = this.toggleLogin.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    // Redirect to home if login succeeds
    if(nextProps.loggedIn) {
      this.props.history.push("/")
    }
  }

  toggleLogin(status) {
    this.setState({
      renderLogin: status
    })
  }

  render() {
    const loginStatus = this.state.renderLogin;
    const toggleLogin = this.toggleLogin;

    let form;
    if(loginStatus) {
      form = <Login login={this.props.login}/>
    } else {
      form = <Register register={this.props.register}/>
    }
    return (
      <div className="login">
        <ul>
          <li onClick={() => this.toggleLogin(true)}>Login</li>
          <li onClick={() => this.toggleLogin(false)}>Register</li>
        </ul>
        {form}
      </div>
    );
  };
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.loggedIn,
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    login: loginDetails => dispatch(authenticationActions.login(loginDetails)),
    register: registerDetails => dispatch(authenticationActions.register(registerDetails))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
