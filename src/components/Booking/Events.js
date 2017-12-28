import React, { Component } from 'react';

import moment from 'moment';

class Events extends Component {
  render() {
    let events;
    if(this.props.events) {
      events = Object.entries(this.props.events).map(([key, event]) => {
        console.log(event);
        return (
          <li key={key} className="event">
            <p>Image</p>
            <img src={ event.images ? event.images[0].url : ""}/>
            <p>Name</p>
            <p>{event.name}</p>
            <p>Description</p>
            <p>{event.descriptions[0].description}</p>
            <p>Start</p>
            <p>{moment(event.schedules[0].start_ts).format('Do MMMM YYYY, h:mm a')}</p>
            <p>End</p>
            <p>{moment(event.schedules[0].end_ts).format('Do MMMM YYYY, h:mm a')}</p>
            <p>Price</p>
            <p>{event.schedules[0].ticket_summary}</p>
            <p>Addess Name</p>
            <p>{event.schedules[0].place.name}</p>
            <p>Addess</p>
            <p>{event.schedules[0].place.address}</p>
            <p>Addess Town</p>
            <p>{event.schedules[0].place.town}</p>
            <p>Addess Postcode</p>
            <p>{event.schedules[0].place.post_code}</p>
            <p>Website</p>
            <p><a href={event.website}>{event.website}</a></p>
          </li>
        );
      });
    }
    return (
      <ul className="events">
        {events}
      </ul>
    );
  }
}

export default Events;
