import * as React from 'react';

// Components
type Props = {
  submitBooking: (booking: any) => void;
  users: {
    id: number;
    full_name: string;
  }[];
}

type State = {
  id: string;
  user_id: string;
  start_date: string;
  end_date: string;
  occupants: string;
  special_instructions: string;
}

class AdminNewBooking extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      occupants: '',
      special_instructions: '',
      start_date: '',
      end_date: '',
      user_id: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.submitBooking(this.state)
  }

  setBookingState(booking) {
    this.setState({
      end_date: booking.end_date,
      id: booking.id,
      occupants: booking.occupants,
      special_instructions: booking.special_instructions,
      start_date: booking.start_date,
      user_id: booking.user.id
    });
  }

  render() {
    const users = this.props.users;
    const booking = this.state;
    const {
      end_date, occupants, special_instructions, start_date, user_id
    } = this.state;

    let usersSelect;

    if (users) {
      usersSelect = Object.keys(users).map((key, index) => {
        let user = users[key];
        return (
          <option
            key={key}
            value={user.id}>
            {user.full_name}
          </option>
        )
      })
    }

    return (
      <form className="admin-booking-form" onSubmit={this.handleSubmit}>
        <h2>New booking</h2>

        <label>
          Select a user:
          <select id="user-select" name="user_id" onChange={this.handleChange} value={user_id}>
            <option value="">--Please choose a user--</option>
            {usersSelect}
          </select>
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

export default AdminNewBooking;
