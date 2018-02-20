import React, { Component } from 'react';

// Components

class Images extends Component{
  render() {
    return (
      <div>
        <h1>Images Container</h1>
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
