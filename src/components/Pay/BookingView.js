import React, {Component} from 'react';

import moment from 'moment';

class BookingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: '',
      end_date: '',
      occupants: '',
      special_instructions: ''
    }
  }

  componentDidMount() {
    const booking = this.props.booking;
    if(booking) { this.setBookingState(booking) }
  }

  componentWillReceiveProps(nextProps) {
    const booking = nextProps.booking;
    if(booking) { this.setBookingState(booking) }
  }

  setBookingState(booking) {
    Object.entries(booking).forEach(([key, value]) => {
      this.setState({[key]: value})
    });
  }

  render() {
    const booking = this.state;
    const start_date = booking.start_date !== "" ? moment(booking.start_date).format("DD-MM-YYYY") : "";
    const end_date   = booking.end_date !== "" ? moment(booking.end_date).format("DD-MM-YYYY") : "";
    return (
      <section className="pay">
        <h2>Booking View component</h2>
        <h2>Booking</h2>
        <div>
          <p>Start Date</p>
          <p>{start_date}</p>
        </div>
        <div>
          <p>End Date</p>
          <p>{end_date}</p>
        </div>
        <div>
          <p>Occupants</p>
          <p>{booking.occupants}</p>
        </div>
        <div>
          <p>Special Instructions</p>
          <p>{booking.special_instructions}</p>
        </div>
      </section>
    );
  }
};

export default BookingView;
