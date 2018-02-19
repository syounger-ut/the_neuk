import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as adminActions from 'adminActions';

// Components
import Bookings from 'Admin/Bookings';

class Admin extends Component{
  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    const user = this.props.user;
    return (
      <div>
        <h1>Admin Container</h1>
        <Bookings user={user}/>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(adminActions.getUsers()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);;
