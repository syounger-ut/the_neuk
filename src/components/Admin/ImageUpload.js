import React, { Component } from 'react';

// Components

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:        '',
      description: '',
      file:        ''
    }
    this.handleChange      = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name   = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleImageChange(event) {
    const file = event.target.files[0];

    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        file: file,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData();
    // formData.append('photo', this.state.file);
    // formData.append('name', this.state.name);
    // formData.append('description', this.state.description);

    this.props.uploadImage(this.state.file);
    // this.props.uploadImage(this.state);
  }

  render() {
    const name = this.state.first_name;
    console.log(this.state)
    return (
      <div className='admin'>
        <h1>Images Component</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <span><input
              name='name'
              value={name}
              onChange={this.handleChange}
              placeholder='Name' /></span>
          </label>
          <label>
            Description:
            <span><input
              name='description'
              value={name}
              onChange={this.handleChange}
              placeholder='description' /></span>
          </label>
          <label>
            Photo:
            <span><input
              type='file'
              id='photoFile'
              name='file'
              multiple={true}
              onChange={this.handleSubmit}/></span>
          </label>
          <input className='button' type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
}

export default ImageUpload;
