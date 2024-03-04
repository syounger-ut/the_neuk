import * as React from 'react';
import {useParams} from "react-router-dom";

// Components
type Props = {
  images: {
    id: number,
    name: string,
    description: string,
    thumb_photo_url: string,
    medium_photo_url: string,
    square_photo_url: string,
    original_photo_url: string
  }[];
  updateImage: (image: any) => void;
  deleteImage: (imageId: number) => void;
}

type State = {
  id: number,
  name: string,
  description: string,
  thumb_photo_url: string,
  medium_photo_url: string,
  square_photo_url: string,
  original_photo_url: string,
  edit: boolean
}

class AdminImage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      description: '',
      thumb_photo_url: '',
      medium_photo_url: '',
      square_photo_url: '',
      original_photo_url: '',
      edit: false
    }
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = useParams();
    const images = this.props.images;
    if (images) {
      const image = images[id || -1];
      this.setImageState(image)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ edit: false })
    const { id } = useParams();
    const image = nextProps.images[id || -1];
    if (image) { this.setImageState(image) }
  }

  setImageState(image) {
    this.setState({
      id: image.id,
      name: image.name,
      description: image.description,
      thumb_photo_url: image.thumb_photo_url,
      medium_photo_url: image.medium_photo_url,
      square_photo_url: image.square_photo_url,
      original_photo_url: image.original_photo_url
    });
  }

  toggleEditForm() {
    this.setState({ edit: !this.state.edit })
  }

  handleChange(event) {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({
      ...this.state,
      [key]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateImage(this.state)
  }

  render() {
    const image = this.state;
    let editForm;
    let imageTitles;
    if (this.state.edit) {
      const name = this.state.name || "";
      const description = this.state.description || "";
      editForm = (
        <div>
          <form className="editImageForm" onSubmit={this.handleSubmit}>
            <label>
              Name:
              <span><input
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Name" /></span>
            </label>
            <label>
              Description:
              <span><input
                name="description"
                value={description}
                onChange={this.handleChange}
                placeholder="Description" /></span>
            </label>
            <button type="button" className="button" onClick={this.toggleEditForm}>Cancel</button>
            <input className="button" type="submit" value="Submit" />
          </form>
        </div>
      );
    } else {
      imageTitles = (
        <div>
          <h1>{image.name}</h1>
          <p>{image.description}</p>
          <button className='button' onClick={this.toggleEditForm}>Edit</button>
          <button className='button' onClick={(imageId) => { this.props.deleteImage(image.id) }}>Delete</button>
        </div>
      );
    }

    return (
      <div className='imageContainer'>
        {editForm || imageTitles}
        <img src={image.original_photo_url} />
      </div>
    );
  }
}

export default AdminImage;
