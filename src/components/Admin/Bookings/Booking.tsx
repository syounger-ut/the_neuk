import * as React from 'react';
import { useParams } from 'react-router-dom';

// Components

type Props = {
  bookings: any;
  updateBooking: (booking: any) => void;
}

type State = {
  id: number;
  end_date: string;
  occupants: number;
  special_instructions: string;
  start_date: string;
  user: {
    full_name: string;
  };
  edit: boolean;
}

class AdminBooking extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      end_date: '',
      id: 0,
      occupants: 0,
      special_instructions: '',
      start_date: '',
      user: {
        full_name: ''
      },
      edit: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = useParams();
    const bookings = this.props.bookings;
    if (bookings) {
      const booking = bookings[id || -1];
      this.setBookingState(booking)
    }
  }

  handleChange(event) {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({
      ...this.state,
      [key]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateBooking(this.state)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ edit: false })
    const { id } = useParams();
    if (nextProps.bookings) {
      const booking = nextProps.bookings[id || -1];
      if (booking) { this.setBookingState(booking) }
    }
  }

  setBookingState(booking) {
    this.setState({
      end_date: booking.end_date,
      id: booking.id,
      occupants: booking.occupants,
      special_instructions: booking.special_instructions,
      start_date: booking.start_date,
      user: booking.user
    });
  }

  render() {
    const booking = this.state;
    const {
      end_date, occupants, special_instructions, start_date
    } = this.state;

    return (
      <form className="admin-booking-form" onSubmit={this.handleSubmit}>
        <h2>Edit booking</h2>
        <label>
          Booked by:
          <span>{booking.user.full_name}</span>
        </label>
        <label>
          Start Date:
          <span><input
            type="date"
            name="start_date"
            value={start_date}
            onChange={this.handleChange}
            placeholder="Start Date" /></span>
        </label>
        <label>
          End Date:
          <span><input
            type="date"
            name="end_date"
            value={end_date}
            onChange={this.handleChange}
            placeholder="End Date" /></span>
        </label>
        <label>
          Occupants:
          <span><input
            name="occupants"
            value={occupants}
            onChange={this.handleChange}
            placeholder="Occupants" /></span>
        </label>
        <label>
          Special Instructions:
          <span><textarea
            name="special_instructions"
            value={special_instructions}
            onChange={this.handleChange}
            placeholder="Special Instructions" /></span>
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    )
  }
}

export default AdminBooking;
