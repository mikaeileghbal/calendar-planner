export default CalendarModel;

function CalendarModel(year) {
  this.year = new Date(year, 0, 1);
}

CalendarModel.prototype.setYear = function (year) {
  this.year = new Date(year, 0, 1);
};

CalendarModel.prototype.getToday = function () {
  console.log("year:", this.year);
  return this.year.getDate();
};

CalendarModel.prototype.getWeekCalendar = function () {
  return { Week: "week" };
};

CalendarModel.prototype.getMonthCalenar = function () {
  let calDate = this.year;
  let daycounter = 0;
  let day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
  let weekDay = day.getDay();

  //Write blank cells preceding the starting day
  let result = [];
  let htmlCode = [];
  for (let i = 0; i < weekDay; i++) {
    htmlCode.push("e");
  }

  //Write cells for each day of the month
  let totalDays = daysInMonth(calDate);

  let highlightDay = new Date().getDate();
  let highlightMonth = new Date().getMonth();
  let sat = "";
  let fri = "";

  //console.log(highlightDay, highlightMonth);
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
      htmlCode +=
        `<td  class='calendar-dates ${sat} ${fri}' id='calendar-today'><div data-daynumber=${daycounter} class='days'>` +
        i +
        //dayEvents[i] +
        "</div></td>";
    } else {
      htmlCode +=
        `<td  class='calendar-dates ${sat} ${fri}'><div data-daynumber=${daycounter} class='days'>` +
        i +
        //dayEvents[i] +
        "</div></td>";
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

  return { MOnth: "month" };
};

CalendarModel.prototype.getYearCalendar = function () {
  return { Year: "year" };
};
