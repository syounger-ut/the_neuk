import React, { Component } from 'react';

class Events extends Component {
  render() {
    let events;
    if(this.props.events) {
      events = Object.entries(this.props.events).map(([key, event]) => {
        return (
          <ul key={key}>
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
