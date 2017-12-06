import React, { Component } from 'react'

// Redux
import { connect }      from 'react-redux'
import * as userActions from 'userActions';

// Components
import Nav from 'Header/Nav';

class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    let logoutOption = true;
    this.props.logoutUser(logoutOption);
  }

  render() {
    const user   = this.props.user;
    const logout = this.logout;
    return (
      <header>
        <Nav logout={logout} user={user}/>
      </header>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.user
    user: state.user
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.logoutUser
    logoutUser: logoutOption => dispatch(userActions.logoutUser(logoutOption))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
