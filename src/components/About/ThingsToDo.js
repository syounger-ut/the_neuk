import React, { Component } from 'react';

class ThingsToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultImage: ''
    }
  }

  render() {
    return (
      <section className="things-to-do">
        <h2>Things To Do</h2>
      </section>
    );
  }
}

export default ThingsToDo;
