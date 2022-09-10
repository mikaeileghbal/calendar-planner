import { monthName } from "./constants";
import { createElement } from "./helper";

export default function CalendarPlanner(date) {
  this.date = date;

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

  function getMonthName(index) {
    return monthName[index];
  }

  this.getMonthOfYear = function () {
    return getMonthName(this.date.getMonth());
  };

  this.today = function () {
    this.date = new Date();
  };
}

CalendarPlanner.prototype.setYear = function (year) {
  this.date.setFullYear = year;
};

CalendarPlanner.prototype.nextYear = function () {
  this.date.setFullYear(this.date.getFullYear() + 1);
};

CalendarPlanner.prototype.previousYear = function () {
  this.date.setFullYear(this.date.getFullYear() - 1);
};

CalendarPlanner.prototype.getDayOfMonth = function () {
  return this.date.getDate();
};

CalendarPlanner.prototype.getYear = function () {
  return this.date.getFullYear();
};

    return output;
  };

  this.getMonthCalenar = function (monthDate) {
    let calendareHtml = "<div class='month-container'>";
    calendareHtml += "<table id='calendar_table' class='calendar_table'>";
    calendareHtml += calCaption(monthDate);
    calendareHtml += calWeakdayRow();
    calendareHtml += calDays(monthDate);
    calendareHtml += "</table>";
    calendareHtml += "</div>";


CalendarPlanner.prototype.getYearCalendar = function () {
  let container = document.createElement("div");
  container.className = "calendar";
  container.id = "calendar";

  function getMonthName(index) {
    return monthName[index];
  }

  this.getWeekCalendar = function () {
    return { Week: "week" };
  };

  /* function to write the calendar caption */
  function calCaption(monthDate) {
    let thisMonth = monthDate.getMonth();

    return (
      //createElement("caption", getMonthName(thisMonth)).textContent =
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


CalendarPlanner.prototype.getMonthCalenar = function (monthDate) {
  let calendareHtml = "<div class='month-container'>";
  calendareHtml += "<table id='calendar_table' class='calendar_table'>";
  calendareHtml += this.calCaption(monthDate);
  calendareHtml += this.calWeakdayRow();
  calendareHtml += this.calDays(monthDate);
  calendareHtml += "</table>";
  calendareHtml += "</div>";

  return calendareHtml;
};

/* function to write the calendar caption */
CalendarPlanner.prototype.calCaption = function (monthDate) {
  // determine the current month
  let thisMonth = monthDate.getMonth();

  return (
    `<caption id="${this.getMonthOfYear(thisMonth)}">` +
    this.getMonthOfYear(thisMonth) +
    " " +
    "<span class='year' id='year'>" +
    this.getYear() +
    "</span></caption>"
  );
};

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
}

CalendarPlanner.prototype.setYear = function (year) {
  this.date.setFullYear(year);
};


//Fnction to write table rows for each day of the month
CalendarPlanner.prototype.calDays = function (calDate) {
  //Determine the startin day of the month
  let daycounter = 0;
  let day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
  let weekDay = day.getDay();

  //Write blank cells preceding the starting day
  let htmlCode = "<tr>";

  for (let i = 0; i < weekDay; i++) {
    htmlCode += "<td class='empty'><div class='empty-day'></div></td>";
  }

  //Write cells for each day of the month
  let totalDays = this.daysInMonth(calDate);

CalendarPlanner.prototype.nextYear = function () {
  this.date.setFullYear(this.date.getFullYear() + 1);
};


CalendarPlanner.prototype.previousYear = function () {
  this.date.setFullYear(this.date.getFullYear() - 1);
};

CalendarPlanner.prototype.nextMonth = function () {
  this.date.setMonth(this.date.getMonth() + 1);
};

CalendarPlanner.prototype.previousMonth = function () {
  this.date.setMonth(this.date.getMonth() - 1);
};

CalendarPlanner.prototype.getDayOfMonth = function () {
  return this.date.getDate();
};

CalendarPlanner.prototype.getMonthOfYear = function () {
  return this._getMonthName(this.date.getMonth());
};

  for (let i = weekDay + 1; i < 7; i++) {
    htmlCode += "<td class='empty'><div class='empty-day'></div></td>";
  }

  htmlCode += "</tr>";

CalendarPlanner.prototype.getYear = function () {
  return this.date.getFullYear();
};


CalendarPlanner.prototype.getToday = function () {
  return this.date.getDate();
};
