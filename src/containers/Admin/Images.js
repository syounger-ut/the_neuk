import React, { Component } from 'react';
import { Route, Link }            from 'react-router-dom'

import { connect }       from 'react-redux';
import * as adminActions from 'adminActions';

// Components
import ImageUpload from 'Admin/ImageUpload';
import AdminImages from 'Admin/AdminImages';

class Images extends Component{
  render() {
    return (
      <div>
        <nav>
          <li><Link to='/admin/images'>Images</Link></li>
          <li><Link to='/admin/images/new'>New Image</Link></li>
        </nav>
        <Route exact path='/admin/images' component={AdminImages}/>
        <Route path='/admin/images/new'   component={ImageUpload}/>
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
    uploadImage: (imageDetails) => dispatch(adminActions.uploadImage(imageDetails)),
    getImages: () => dispatch(adminActions.getImages())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
