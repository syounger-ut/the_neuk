import React, { Component } from 'react'

import GoogleCalendarApi from 'googleCalendarApi'

const moment = require('moment');

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date:        '',
      month:       '',
      daysInMonth: '',
      startDay:    ''
    };
    this.updateCalendarFacts = this.updateCalendarFacts.bind(this);
  }

  componentDidMount() {
    const calendar = new GoogleCalendarApi();
    const date     = new Date(2017,5);
    this.updateCalendarFacts(date);
  }

  updateCalendarFacts(date) {
    const month       = date.getMonth();
    const daysInMonth = moment(date).daysInMonth();
    const startDay    = moment(date).startOf('month').toDate().getDay()
    this.setState({
      date:  date,
      month: month,
      daysInMonth: daysInMonth,
      startDay: startDay
    })
  }

  handleClick(direction) {
    console.log(direction);
  }

  render() {
    const monthName = moment.months()[this.state.month];

    const daysInMonth = this.state.daysInMonth;
    const startDay    = this.state.startDay;

    let calendar = new Array;
    for(let i = 1; i < daysInMonth + startDay + 7; i++) {
      let day = i - startDay - 6;

      if(i < (startDay + 7)) {
        calendar.push(<li className="emptyDay" key={i}></li>);
      } else {
        calendar.push(<li className="calendarDay" key={i}>{day}</li>);
      }
    }

    const handleClick = this.handleClick;

    return (
      <div>
        <h1>Calendar Component</h1>
        <ul id="calendar">
          <ul id="datePicker">
            <li onClick={() => this.handleClick('down')}><i className="fa fa-chevron-left"></i></li>
            <li>{monthName}</li>
            <li onClick={() => this.handleClick('up')}><i className="fa fa-chevron-right"></i></li>
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
