import * as React from 'react';

import moment from 'moment';

type Props = {
  booking: {
    start_date: string;
    end_date: string;
    occupants: string;
    special_instructions: string;
    price: string;
  };
}

type State = {
  start_date: string;
  end_date: string;
  occupants: string;
  special_instructions: string;
  price: string;
}

class BookingView extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      start_date: '',
      end_date: '',
      occupants: '',
      special_instructions: '',
      price: ''
    }
  }

  componentDidMount() {
    const booking = this.props.booking;
    if (booking) { this.setBookingState(booking) }
  }

  componentWillReceiveProps(nextProps) {
    const booking = nextProps.booking;
    if (booking) { this.setBookingState(booking) }
  }

  setBookingState(booking) {
    Object.entries(booking).forEach(([key, value]) => {
      this.setState({
        ...this.state,
        [key]: value,
      })
    });
  }

  render() {
    const booking = this.state;
    const start_date = booking.start_date !== "" ? moment(booking.start_date).format("DD-MM-YYYY") : "";
    const end_date = booking.end_date !== "" ? moment(booking.end_date).format("DD-MM-YYYY") : "";
    return (
      <div className="booking">
        <h4>Your Booking</h4>
        <p>Start Date</p>
        <p>{start_date}</p>
        <p>End Date</p>
        <p>{end_date}</p>
        <p>Occupants</p>
        <p>{booking.occupants}</p>
        <p>Special Instructions</p>
        <p>{booking.special_instructions}</p>
        <p>Price</p>
        <p>{booking.price.toLocaleString()}</p>
      </div>
    );
  }
};

export default BookingView;
