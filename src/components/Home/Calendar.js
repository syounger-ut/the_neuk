import React, { Component } from 'react'

import GoogleCalendarApi from 'googleCalendarApi'

class Calendar extends Component {

  componentDidMount() {
    const calendar = new GoogleCalendarApi();
  }

  monthFacts(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
    let daysInMonth = new Date(year, month, 0).getDate();
    let startDayOfWeek = new Date(year, month, 1).getDay();
    console.log(new Date(year, month, 1))
    return {
      days: daysInMonth,
      startDayOfWeek: startDayOfWeek
    }
  };

  render() {
    const monthFacts = this.monthFacts(0,2017);

    let calendar = new Array;
    for(let i = 1; i < monthFacts.days + monthFacts.startDayOfWeek; i++) {
      let day = i - monthFacts.startDayOfWeek + 1;
      if(i < monthFacts.startDayOfWeek) {
        calendar.push(<li className="emptyDay" key={i}></li>);
      } else {
        calendar.push(<li className="calendarDay" key={i}>{day}</li>);
      }
    }

    return (
      <div>
        <h1>Calendar Component</h1>
        <ul id="calendar">
          <ul id="datePicker">
            <li>LeftDate</li>
            <li>Sams Calendar Picker</li>
            <li>RightDate</li>
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
