import React, { Component } from 'react';
import { Link }             from 'react-router-dom'

// Components

class AdminImage extends Component {
  render() {
    const id = this.props.match.params.id;
    const images = this.props.images;
    let image;
    if (images) {
      image = images[Number(id)]
      return (
        <div className='imageContainer'>
          <h1>{image.name}</h1>
          <li className='button'><Link to='/admin/images/new'>Edit</Link></li>
          <li className='button'><Link to='/admin/images/new'>Delete</Link></li>
          <p>{image.description}</p>
          <img src={image.original_photo_url}/>
        </div>
      );
    }

    return (
      <div>{image}</div>
    );
  }
}

export default AdminImage;
