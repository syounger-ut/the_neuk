import React, { Component } from 'react'

import moment from 'moment';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: '',
      end_date: '',
      occupants: '',
      special_instructions: '',
      price: 0
    };
    this.setBookingState = this.setBookingState.bind(this);
    this.handleSubmit    = this.handleSubmit.bind(this);
    this.handleChange    = this.handleChange.bind(this);
  }

  componentDidMount() {
    const booking = this.props.booking;
    if(booking) { this.setBookingState(booking) }
  }

  componentWillReceiveProps(nextProps) {
    const booking = nextProps.booking;
    if(booking) {
      this.setBookingState(booking)
      if (booking.start_date && booking.end_date) {
        const bookingStart = moment(booking.start_date);
        const bookingEnd   = moment(booking.end_date);
        const daysBetween = bookingEnd.diff(bookingStart, 'days') + 1;
        this.setState({
          // PRICE TO BE UPDATED LATER TO BE DYNAMIC FROM SERVER
          price: daysBetween * 200
        })
      } else {
        this.setState({ price: 0 })
      }
    }
  }

  setBookingState(booking) {
    Object.entries(booking).forEach(([key, value]) => {
      this.setState({[key]: value})
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setBooking(this.state);
  }

  handleChange(event) {
    let key   = event.target.name;
    let value = event.target.value;
    this.setState({
      [key]: value
    })
  }

  render() {
    const start_date = this.state.start_date !== "" ? moment(this.state.start_date).format("DD-MM-YYYY") : "";
    const end_date   = this.state.end_date !== "" ? moment(this.state.end_date).format("DD-MM-YYYY") : "";
    const { occupants, special_instructions, price } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="booking-form">
        <label>
          Booking Start:
          <span><input className="read-only" name="start_date" placeholder="dd-mm-yyyy" value={start_date} readOnly={true}/></span>
        </label>
        <label>
          Booking End:
          <span><input className="read-only" name="end_date" placeholder="dd-mm-yyyy" value={end_date} readOnly={true}/></span>
        </label>
        <label>
          Occupants:
          <span><input type="number" min="1" max="6" placeholder="1 to 6" name="occupants" value={occupants} onChange={this.handleChange}/></span>
        </label>
        <label>
          Special Instructions:
          <textarea name="special_instructions" value={special_instructions} onChange={this.handleChange}/>
        </label>
        <label>
          Price (GBP):
          <span><input  className="price" name="price" value={price.toLocaleString()} readOnly={true}/></span>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default BookingForm;
