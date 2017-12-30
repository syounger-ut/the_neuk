import React, { Component } from 'react';

// Components
import Photos from 'About/Photos';

class About extends Component {
  render() {
    return (
      <section className="about">
        <h1>Hello About Component</h1>
        <Photos/>
      </section>
    );
  }
}

export default About;
