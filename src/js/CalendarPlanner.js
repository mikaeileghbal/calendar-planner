const CalendarPlanner = (function () {
  function CalendarPlanner(date) {
    this.date = date;
    this.currentMonth = this.date.getMonth();
  }

  CalendarPlanner.prototype.setYear = function (year) {
    this.date.setFullYear(year);
  };

  CalendarPlanner.prototype.nextYear = function () {
    this.date.setFullYear(this.date.getFullYear() + 1);
  };

  CalendarPlanner.prototype.previousYear = function () {
    this.date.setFullYear(this.date.getFullYear() - 1);
  };

  CalendarPlanner.prototype.nextMonth = function () {
    this.date.setMonth(this.date.getMonth() + 1);
    console.log(this.date);
  };

  CalendarPlanner.prototype.previousMonth = function () {
    this.date.setMonth(this.date.getMonth() - 1);
    console.log(this.date);
  };

  CalendarPlanner.prototype.getDayOfMonth = function () {
    return this.date.getDate();
  };

  CalendarPlanner.prototype.getMonthOfYear = function () {
    return this._getMonthName(this.date.getMonth());
  };

  CalendarPlanner.prototype.getYear = function () {
    return this.date.getFullYear();
  };

  CalendarPlanner.prototype.getToday = function () {
    return this.date.getDate();
  };

  CalendarPlanner.prototype.getWeekCalendar = function () {
    return { Week: "week" };
  };

  CalendarPlanner.prototype.getYearCalendar = function () {
    let output = "<div class='year-container'>";
    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
      //let monthDate = new Date(this.getYear(), monthIndex, 1);
      this.date.setMonth(monthIndex);
      /* Write the calendar to the div with stored in 'calendarContainer' */
      output += this.getMonthCalenar(this.date);
    }

    return output;
  };

  CalendarPlanner.prototype.getMonthCalenar = function (monthDate) {
    let calendareHtml = "<div class='month-container'>";
    calendareHtml += "<table id='calendar_table' class='calendar_table'>";
    calendareHtml += calCaption(monthDate);
    calendareHtml += calWeakdayRow();
    calendareHtml += calDays(monthDate);
    calendareHtml += "</table>";
    calendareHtml += "</div>";

    return calendareHtml;
  };

  /* function to write the calendar caption */
  function calCaption(monthDate) {
    let thisMonth = monthDate.getMonth();

    return (
      `<caption id="${getMonthName(thisMonth)}">` +
      getMonthName(thisMonth) +
      " " +
      "<span class='year' id='year'>" +
      monthDate.getFullYear() +
      "</span></caption>"
    );
  }

  // function to write the table row of weakday names
  function calWeakdayRow() {
    let weakdays = ["S", "M", "T", "W", "T", "F", "S"];
    let rowHtml = "<tr>";

    for (let i = 0; i < weakdays.length; i++) {
      rowHtml += "<th class='calendar-weakdays'>" + weakdays[i] + "</th>";
    }

    rowHtml += "</tr>";
    return rowHtml;
  }

  //function to calculate the numbers of days in the month
  function daysInMonth(calDate) {
    let dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let thisYear = calDate.getFullYear();
    let thisMonth = calDate.getMonth();

    //Revise the days in February for Leap years
    if (thisYear % 4 === 0) {
      if (thisYear % 100 != 0 || thisYear % 400 === 0) {
        dayCount[1] = 29;
      }
    }

    return dayCount[thisMonth];
  }

  //Fnction to write table rows for each day of the month
  function calDays(calDate) {
    let daycounter = 0;
    let day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
    let weekDay = day.getDay();

    //Write blank cells preceding the starting day
    let htmlCode = "<tr>";
    for (let i = 0; i < weekDay; i++) {
      htmlCode += "<td class='empty'><div class='empty-day'></div></td>";
    }

    //Write cells for each day of the month
    let totalDays = daysInMonth(calDate);
    let highlightDay = new Date().getDate();
    let highlightMonth = new Date().getMonth();
    let sat = "";
    let fri = "";

    for (let i = 1; i <= totalDays; i++) {
      day.setDate(i);
      weekDay = day.getDay();

      daycounter = `${day.getFullYear()}${
        day.getMonth().toString().length === 2
          ? day.getMonth()
          : "0" + day.getMonth()
      }${
        day.getDate().toString().length === 2
          ? day.getDate()
          : "0" + day.getDate()
      }`;

      sat = weekDay === 6 ? "sat" : "";
      fri = weekDay === 5 ? "fri" : "";

      if (i === highlightDay && calDate.getMonth() === highlightMonth) {
        htmlCode += `<td class='calendar-dates ${sat} ${fri}' id='calendar-today'>
        <div data-daynumber=${daycounter} class='days'>${i}</div>
        </td>`;
      } else {
        htmlCode += `<td class='calendar-dates ${sat} ${fri}'>
        <div data-daynumber=${daycounter} class='days'> ${i}</div>
        </td>`;
      }
      if (weekDay === 6) {
        htmlCode += "</tr>";
      }

      daycounter++;
    }

    //add extra empty days to table
    day = new Date(calDate.getFullYear(), calDate.getMonth(), totalDays);
    weekDay = day.getDay();

    for (let i = weekDay + 1; i < 7; i++) {
      htmlCode += "<td class='empty'><div class='empty-day'></div></td>";
    }
    htmlCode += "</tr>";

    return htmlCode;
  }

  function getMonthName(index) {
    let monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthName[index];
  }

  return CalendarPlanner;
})();

export default CalendarPlanner;
