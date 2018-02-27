import React, { Component } from 'react';
import { Route, Link }            from 'react-router-dom'

import { connect }       from 'react-redux';
import * as adminActions from 'adminActions';

// Components
import ImageUpload from 'Admin/Images/Upload';
import AdminImages from 'Admin/Images/Images';

class Images extends Component {
  componentWillMount() {
    this.props.getImages();
  }
  render() {
    const images = this.props.images
    return (
      <div>
        <nav>
          <li><Link to='/admin/images'>Images</Link></li>
          <li><Link to='/admin/images/new'>New Image</Link></li>
        </nav>
        <Route exact path='/admin/images' render={() =><AdminImages images={images}/>}/>
        {/* <Route exact path='/admin/images' component={AdminImages}/> */}
        <Route path='/admin/images/new'   component={ImageUpload}/>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    images: state.images
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
