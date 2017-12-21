import React, { Component } from 'react'

import moment from 'moment';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: '',
      end_date: '',
      occupants: '',
      special_instructions: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(Object.keys(nextProps.booking).length !== 0) {
      this.setState({
        start_date: nextProps.booking.start_date,
        end_date: nextProps.booking.end_date,
        occupants: nextProps.booking.occupants,
        special_instructions: nextProps.booking.special_instructions
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitBooking(this.state);
  }

  handleChange(event) {
    let key   = event.target.name;
    let value = event.target.value;
    this.setState({
      [key]: value
    })
  }

  render() {
    let bookingStart = this.props.booking.start_date ? moment(this.props.booking.start_date).format("DD-MM-YYYY") : '';
    let bookingEnd   = this.props.booking.end_date ? moment(this.props.booking.end_date).format("DD-MM-YYYY") : '';
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Booking Start:
          <span><input className="read-only" placeholder="dd-mm-yyyy" value={bookingStart} readOnly={true}/></span>
        </label>
        <label>
          Booking End:
          <span><input className="read-only" placeholder="dd-mm-yyyy" value={bookingEnd} readOnly={true}/></span>
        </label>
        <label>
          Occupants:
          <span><input type="number" min="1" max="6" placeholder="1 to 6" name="occupants" onChange={this.handleChange}/></span>
        </label>
        <label>
          Special Instructions:
          <textarea name="special_instructions" onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default BookingForm;
