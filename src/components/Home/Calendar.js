import React, { Component } from 'react'

import GoogleCalendarApi from 'googleCalendarApi'

class Calendar extends Component {

  componentDidMount() {
    const calendar = new GoogleCalendarApi();
  }

  getDaysInMonth(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  };

  render() {
    console.log(this.getDaysInMonth(1, 2012));
    console.log(this.getDaysInMonth(2, 2012));
    console.log(this.getDaysInMonth(9, 2012));
    console.log(this.getDaysInMonth(12, 2012));
    return (
      <div>
        <h1>Calendar Component</h1>
        <div id='calendar'></div>
      </div>
    );
  }
}

export default Calendar;
