import React, { Component } from 'react'

import GoogleCalendarApi from 'googleCalendarApi'

const moment = require('moment');

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date:         '',
      month:        '',
      daysInMonth:  '',
      startDay:     '',
      bookingStart: '',
      bookingEnd:   ''
    };
    this.updateCalendarFacts = this.updateCalendarFacts.bind(this);
    this.changeMonth         = this.changeMonth.bind(this);
    this.bookingDates        = this.bookingDates.bind(this);
  }

  componentDidMount() {
    const calendar = new GoogleCalendarApi();
    const date     = new Date();
    this.updateCalendarFacts(date);
  }

  updateCalendarFacts(date) {
    const month       = date.getMonth();
    const daysInMonth = moment(date).daysInMonth();
    let startDay      = moment(date).startOf('month').toDate().getDay();
    if(startDay === 0) { startDay = 7 } // Change Sunday from 0 to day 7
    this.setState({
      date:  date,
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
    let startDate = this.state.bookingStart;
    let endDate   = this.state.bookingEnd;

    if(startDate === "") {
      this.setState({
        bookingStart: date
      })
    } else if(dateFormatted === Date.parse(startDate)) {
      this.setState({
        bookingStart: date
      })
    } else if(date > Date.parse(startDate)) {
      this.setState({
        bookingEnd: date
      })
    }
    debugger
    console.log(this.state)
  }

  render() {
    console.log(this.state)
    const monthName   = moment.months()[this.state.month];
    const changeMonth = this.changeMonth;

    const daysInMonth = this.state.daysInMonth;
    const startDay    = this.state.startDay;
    let calendar      = new Array;
    for(let i = 1; i < daysInMonth + startDay; i++) {
      let day = i - startDay + 1;

      if(i < (startDay)) {
        calendar.push(<li className="emptyDay" key={i}></li>);
      } else {
        let date = moment(this.state.date).startOf('month').add(day - 1, 'd').toDate();
        calendar.push(<li className="calendarDay" key={i} onClick={() => this.bookingDates(date)}>{day}</li>);
      }
    }


    return (
      <div>
        <h1>Calendar Component</h1>
        <ul id="calendar">
          <ul id="datePicker">
            <li onClick={() => this.changeMonth('down')}><i className="fa fa-chevron-left"></i></li>
            <li>{monthName}</li>
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
        </ul>
      </div>
    );
  }
}

export default Calendar;
