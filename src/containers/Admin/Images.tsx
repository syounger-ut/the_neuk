import * as React from 'react';
import {Route, redirect, useLocation} from 'react-router-dom'

import { connect } from 'react-redux';
import * as adminActions from '../../actions/adminActions';

// Components
import ImageUpload from '../../components/Admin/Images/Upload';
import AdminImages from '../../components/Admin/Images/Images';
import AdminImage from '../../components/Admin/Images/Image';

type Props = {
  user: any;
  images: any;
  uploadImage: (imageDetails: any) => any;
  getImages: () => any;
  deleteImage: (imageId: number) => any;
  updateImage: (image: any) => any;
}

class Images extends React.Component<Props> {
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
      redirect('/admin/images')
    }).catch(error => {
      console.log(error)
    })
  }

  deleteImage(imageId) {
    this.props.deleteImage(imageId).then(result => {
      redirect('/admin/images')
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
    const { pathname } = useLocation();
    return (
      <div className='images'>
        <Route path={`${pathname}`}>
          <AdminImages images={images} />
        </Route>
        <Route path={`${pathname}/new`}>
          <ImageUpload uploadImage={this.uploadImage} />
        </Route>
        <Route
          // (\\d+) ensures the id is an integer & prevents clash with /new
          path={`${pathname}/:id(\\d+)`}>
          <AdminImage images={images} deleteImage={this.deleteImage} updateImage={this.updateImage} />
        </Route>
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
