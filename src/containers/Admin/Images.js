import React, { Component } from 'react';
import { Route }      from 'react-router-dom'

import { connect }       from 'react-redux';
import * as adminActions from 'adminActions';

// Components
import ImageUpload from 'Admin/Images/Upload';
import AdminImages from 'Admin/Images/Images';
import AdminImage  from 'Admin/Images/Image';

class Images extends Component {
  constructor(props) {
    super(props);
    this.uploadImage = this.uploadImage.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }
  componentWillMount() {
    this.props.getImages();
  }

  uploadImage(image) {
    this.props.uploadImage(image).then(result => {
      this.props.history.push('/admin/images')
    }).catch(error => {
      console.log(error)
    })
  }

  deleteImage(imageId) {
    this.props.deleteImage(imageId).then(result => {
      this.props.history.push('/admin/images')
    }).catch(error => {
      console.log(error)
    })
  }

  updateImage(image) {
    this.props.updateImage(image).then(result => {

    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    const images = this.props.images;
    const match  = this.props.match;
    return (
      <div className='images'>
        <Route exact path={`${match.path}`} render={() =><AdminImages images={images}/>}/>
        <Route path={`${match.path}/new`}   render={() =><ImageUpload uploadImage={this.uploadImage}/>}/>
        <Route
          path={`${match.path}/:id(\\d+)`} // (\\d+) ensures the id is an integer & prevents clash with /new
          render={
            (props) => <AdminImage {...props}
              images={images}
              deleteImage={this.deleteImage}
              updateImage={this.updateImage}
            />}/>
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
    getImages: () => dispatch(adminActions.getImages()),
    deleteImage: (imageId) => dispatch(adminActions.deleteImage(imageId)),
    updateImage: (image) => dispatch(adminActions.updateImage(image))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
