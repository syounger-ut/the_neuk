import * as React from 'react';

import ImageGallery from 'react-image-gallery';

type Props = {
  locations: { defaultLocation: any };
}

type State = {
  defaultImage: {
    name: string;
    description: string;
    original_photo_url: string;
  };
}

class MainPhoto extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      defaultImage: {
        name: '',
        description: '',
        original_photo_url: '',
      },
    }
  }

  componentWillMount() {
    if (this.props.locations) {
      this.setState({ defaultImage: this.props.locations.defaultLocation })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.locations) {
      this.setState({ defaultImage: nextProps.locations.defaultLocation })
    }
  }

  render() {
    const defaultImage = this.state.defaultImage;

    let images: any[] = [];

    if (defaultImage) {
      images = [{
        original: defaultImage.original_photo_url
      }]
    }

    return (
      <section className="image-gallery-container">
        <ImageGallery items={images} showThumbnails={false} showPlayButton={false} />
        <h4>{defaultImage?.name}</h4>
        <p>{defaultImage?.description}</p>
      </section>
    );
  }
}

export default MainPhoto;
