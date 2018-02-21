import React, { Component } from 'react';

import { connect }       from 'react-redux';
import * as adminActions from 'adminActions';

// Components
import ImageUpload from 'Admin/ImageUpload';

class Images extends Component{
  render() {
    return (
      <div>
        <ImageUpload uploadImage={this.props.uploadImage}/>
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
    uploadImage: (imageDetails) => dispatch(adminActions.uploadImage(imageDetails))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
