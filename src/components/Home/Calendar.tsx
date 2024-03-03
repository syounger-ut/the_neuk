import * as React from 'react';

import GoogleCalendarApi from 'googleCalendarApi'

const moment = require('moment');

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      month: '',
      daysInMonth: '',
      startDay: '',
      bookingStart: '',
      bookingEnd: ''
    };
    this.updateCalendarFacts = this.updateCalendarFacts.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
  }

  componentDidMount() {
    const calendar = new GoogleCalendarApi();
    const date = new Date();
    this.updateCalendarFacts(date);
  }

  updateCalendarFacts(date) {
    const month = date.getMonth();
    const daysInMonth = moment(date).daysInMonth();
    let startDay = moment(date).startOf('month').toDate().getDay();
    if (startDay === 0) { startDay = 7 } // Change Sunday from 0 to day 7
    this.setState({
      date: date,
      month: month,
      daysInMonth: daysInMonth,
      startDay: startDay
    })
  }

  changeMonth(direction) {
    let momentDate = moment(this.state.date);
    let nextMonth = direction === 'up' ? momentDate.add(1, 'M') : momentDate.subtract(1, 'M');
    this.updateCalendarFacts(nextMonth.toDate())
  }

  bookingDates(date) {
    let dateFormatted = Date.parse(date);
    let booking = this.props.booking;
    let startDate = booking ? Date.parse(booking.start_date) : '';
    let endDate = booking ? Date.parse(booking.end_date) : '';

    if (!booking || isNaN(startDate)) {
      this.props.bookingStart(date);
    } else if (dateFormatted < startDate) {
      this.props.bookingStart(date);
    } else if (dateFormatted === startDate) {
      this.props.bookingStart('');
    } else if (dateFormatted === endDate) {
      this.props.bookingEnd('');
    } else if (dateFormatted > startDate) {
      this.props.bookingEnd(date);
    }
  }

  clearCalendar() {
    this.props.bookingStart('');
    this.props.bookingEnd('');
  }

  render() {
    const monthName = moment.months()[this.state.month];
    const year = moment(this.state.date).format("YYYY")
    const changeMonth = this.changeMonth;

    const booking = this.props.booking;
    const bookingStart = booking ? Date.parse(booking.start_date) : '';
    const bookingEnd = booking ? Date.parse(booking.end_date) : '';

    const daysInMonth = this.state.daysInMonth;
    const startDay = this.state.startDay;
    let calendar = new Array;
    for (let i = 1; i < daysInMonth + startDay; i++) {
      let day = i - startDay + 1;

      if (i < (startDay)) {
        calendar.push(<li className="emptyDay" key={i}></li>);
      } else {
        let date = moment(this.state.date).startOf('month').add(day - 1, 'd').toDate();
        let backgroundColor;
        if (booking) {
          let dateFormatted = Date.parse(date);
          let dateMatch =
            bookingStart === dateFormatted ||
            bookingEnd === dateFormatted ||
            dateFormatted >= bookingStart && dateFormatted <= bookingEnd;
          backgroundColor = dateMatch ? "selectedDate" : "calendarDay";
        } else {
          backgroundColor = "calendarDay";
        }
        calendar.push(<li className={backgroundColor} key={i} onClick={() => this.bookingDates(date)}>{day}</li>);
      }
    }

    return (
      <ul id="calendar">
        <ul id="datePicker">
          <li onClick={() => this.changeMonth('down')}><i className="fa fa-chevron-left"></i></li>
          <li>{`${monthName} ${year}`}</li>
          <li onClick={() => this.changeMonth('up')}><i className="fa fa-chevron-right"></i></li>
        </ul>
        <ul id="daysOfWeek">
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
          <li>Sun</li>
        </ul>
        {calendar}
        <ul className="clear-dates" onClick={() => this.clearCalendar()}>
          <li>Clear Dates</li>
        </ul>
      </ul>
    );
  }
}

export default Calendar;
