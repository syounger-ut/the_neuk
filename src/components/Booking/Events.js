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
    let events;
    if(this.state.events.length !== 0) {
      events = this.state.events.map(event => {
        return (
          <ul key={event.event_id}>
            <li>{event.name}</li>
            <li>{event.descriptions[0].description}</li>
          </ul>
        );
      });
    }
    return (
      <section className="events">
        {events}
      </section>
    );
  }
}

export default Events;
