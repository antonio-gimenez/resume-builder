import React, { useState } from "react";

function Calendar({ currentDate = new Date() }) {
  // Create a state variable to track the visibility of the calendar
  const [isVisible, setIsVisible] = useState(false);
  const [date, setDate] = useState(currentDate);
  // Get the current number of the day of the week
  const dayOfWeek = date.getDay();

  // Get the current month and year
  const month = date.getMonth();
  const year = date.getFullYear();
  // Get the number of days in the month
  const numDays = new Date(year, month + 1, 0).getDate();
  // Create an array of days
  const days = [];
  for (let i = 1; i <= numDays; i++) {
    days.push(i);
  }
  // Create the rows of the calendar
  const rows = [];
  let cells = [];
  days.forEach((day, idx) => {
    if (idx % 7 !== 0) {
      // Check if the date is the current day
      if (day === date.getDate()) {
        cells.push(
          <td key={day} className="selected-day">
            {day}
          </td>
        );
      } else {
        cells.push(<td key={day}>{day}</td>);
      }
    } else {
      rows.push(cells);
      cells = [];

      // Check if the date is the current day
      if (day === date.getDate()) {
        cells.push(
          <td key={day} className="selected-day">
            {day}
          </td>
        );
      } else {
        cells.push(<td key={day}>{day}</td>);
      }
    }
    if (idx === days.length - 1) {
      // Add the last row
      rows.push(cells);
    }
  });
  // Create the table
  const calendar = rows.map((d, i) => <tr key={i}>{d}</tr>);

  // Create an array of the days of the week
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  // Use a map function to create a th element for each day of the week
  const daysOfWeekElements = daysOfWeek.map((day, idx) => (
    <th colSpan={1} key={idx}>
      {day}
    </th>
  ));

  return (
    <div>
      {/* Add a date input field */}
      <input
        type="date"
        onFocus={() => setIsVisible(true)} // Show the calendar when the input is focused
      />
      {/* Add a div element that wraps the calendar and add a display: none style to it */}
      <div className={`calendar ${isVisible ? "show" : "hide"}`}>
        <table>
          <thead>
            <tr>
              <th colSpan="7">{`${date.toLocaleString("default", { month: "long" })} ${year}`}</th>
            </tr>
            <tr>{daysOfWeekElements}</tr>
          </thead>
          <tbody>{calendar}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Calendar;
