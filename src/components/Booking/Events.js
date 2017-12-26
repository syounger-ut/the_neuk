import React, { Component } from 'react';

import theNeukApi from 'theNeukApi';

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    };
    this.eventsList = this.eventsList.bind(this);
  }

  componentDidMount() {
    this.eventsList();
  }

  eventsList() {
    let start = new Date();
    let end   = new Date();
    theNeukApi.getEvents(start, end).then(events => {
      this.setState({
        events: events
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <section className="events">
        <h1>Events</h1>
      </section>
    );
  }
}

export default Events;
