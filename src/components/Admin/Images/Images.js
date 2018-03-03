import React, { Component } from 'react';
import { Link }             from 'react-router-dom'

// Components

class AdminImages extends Component {
  render() {
    const images = this.props.images;
    console.log(this.props)
    let imagesTile;
    if(images) {
      imagesTile = Object.entries(images).map(([index, image]) => {
        let imgUrl = `/admin/images/${image.id}`;
        return (
          <li key={index} className="image">
            <Link to={imgUrl}>
              <img src={image.thumb_photo_url}/>
            </Link>
          </li>
        )
      })
    }

    return (
      <div className='admin'>
        <h1>Admin Images Component</h1>
        <li className='button'><Link to='/admin/images/new'>New Image</Link></li>
        {imagesTile}
      </div>
    );
  }
}

export default AdminImages;
