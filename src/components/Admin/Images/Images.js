import React, { Component } from 'react';

// Components

class AdminImages extends Component {
  render() {
    const images = this.props.images;
    let imagesTile;
    if(images) {
      imagesTile = Object.entries(images).map(([index, image]) => {
        return (
          <li key={index} className="image">
            <img src={image.thumb_photo_url}/>
          </li>
        )
      })
    }

    return (
      <div className='admin'>
        <h1>Admin Images Component</h1>
        {imagesTile}
      </div>
    );
  }
}

export default AdminImages;
