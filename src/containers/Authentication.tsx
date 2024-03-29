import * as React from 'react';
import { redirect } from "react-router-dom";

import { connect } from 'react-redux';
import * as authenticationActions from '../actions/authenticationActions';

// Components
import Login from '../components/Authentication/Login';
import Register from '../components/Authentication/Register';

type Props = {
  login: () => void;
  register: () => void;
}

type State = {
  renderLogin: boolean;
}

class Authentication extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      renderLogin: true
    }
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Redirect to home if login succeeds
    if (nextProps.loggedIn) {
      redirect("/")
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
    if (loginStatus) {
      form = <Login login={this.props.login} />
    } else {
      form = <Register register={this.props.register} />
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
    loggedIn: state.currentUser,
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
