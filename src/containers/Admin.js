import React, { Component } from 'react';
import { Route }            from 'react-router-dom'

import { connect }       from 'react-redux';
import * as adminActions from 'adminActions';

// Components
import AdminNav from 'Admin/Nav';
import Home     from 'Admin/Home';
import Bookings from 'Admin/Bookings';
import Images   from 'Admin/Images';

class Admin extends Component{
  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    const user = this.props.user;
    return (
      <div className='admin-template'>
        <AdminNav/>
        <Route exact path='/admin'      component={Home}/>
        <Route path='/admin/images'     component={Images}/>
        <Route path='/admin/bookings'   component={Bookings}/>
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
    uploadImage: (imageDetails) => dispatch(adminActions.uploadImage(imageDetails))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
