import * as React from 'react';
import {Route, redirect, useLocation} from 'react-router-dom'

import { connect } from 'react-redux';
import * as adminActions from '../../actions/adminActions';

// Components
import AdminBookings from '../../components/Admin/Bookings/Bookings';
import AdminBooking from '../../components/Admin/Bookings/Booking';
import AdminNewBooking from '../../components/Admin/Bookings/New';

type Booking = {
  id: number;
  start_date: string;
}

type Props = {
  getBookings: () => void;
  getUsers: () => void;
  updateBooking: (booking: any) => any;
  submitBooking: (booking: any) => any;
  bookings: Booking[];
  users: any[];
}

class Bookings extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.updateBooking = this.updateBooking.bind(this);
    this.submitBooking = this.submitBooking.bind(this);
  }

  componentWillMount() {
    this.props.getBookings();
    this.props.getUsers();
  }

  updateBooking(booking) {
    this.props.updateBooking(booking).then(result => {
      redirect("/admin/bookings")
    }).catch(error => {
      console.log(error)
    })
  }

  submitBooking(booking) {
    this.props.submitBooking(booking).then(result => {
      redirect("/admin/bookings")
    }).catch(error => {
      console.log(error)
    })
  }

  sortBookings(bookings, direction) {
    let currentTime = new Date(Date.now());

    const filtered = Object.values<Booking>(bookings)
      .filter(booking => {
        let bookingDate = new Date(booking.start_date);
        if (direction === ">") {
          return bookingDate > currentTime;
        } else {
          return bookingDate < currentTime;
        }
      })
      .reduce((obj, booking) => {

        // Sort the bookings by the original order
        let bookingId = Object.entries<Booking>(bookings).find(([id, bking]) => {
          return bking.id === booking.id
        }) || -1;

        obj[bookingId[0]] = booking;
        return obj;
      }, {});

    return filtered
  }

  render() {
    const bookings = this.props.bookings;
    const users = this.props.users;
    const { pathname } = useLocation();

    let upcomingBookings;
    let pastBookings;

    if (bookings) {
      upcomingBookings = this.sortBookings(bookings, ">");
      pastBookings = this.sortBookings(bookings, "<");
    }

    return (
      <div>
        <Route
          path={`${pathname}`}>
          <AdminBookings pastBookings={pastBookings} upcomingBookings={upcomingBookings} />
        </Route>
        <Route
          // (\\d+) ensures the id is an integer & prevents clash with /new
          path={`${pathname}/:id(\\d+)`}>
          <AdminBooking bookings={bookings} updateBooking={this.updateBooking} />
        </Route>
        <Route
          path={`${pathname}/new`}>
          <AdminNewBooking submitBooking={this.submitBooking} users={users} />
        </Route>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    bookings: state.bookings,
    users: state.users
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    getBookings: () => dispatch(adminActions.getBookings()),
    updateBooking: (booking) => dispatch(adminActions.updateBooking(booking)),
    submitBooking: (booking) => dispatch(adminActions.submitBooking(booking)),
    getUsers: () => dispatch(adminActions.getUsers())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
