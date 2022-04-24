import CalendarPlanner from "./CalendarPlanner.js";
import viewModes from "./ViewModes.js";

const UI = (function () {
  const UI = function () {
    this.View_Mode = viewModes.YEAR_VIEW;
    this.calendar = new CalendarPlanner(new Date());
  };

  UI.prototype.render = function () {
    const section = document.querySelector(".section-main");

    if (this.View_Mode === viewModes.YEAR_VIEW) {
      document.querySelector(".calendar").innerHTML =
        this.calendar.getYearCalendar();
    } else {
      document.querySelector(".calendar").innerHTML =
        this.calendar.getMonthCalenar(this.calendar.date);
    }
    setTitles(this.calendar);
  };

  UI.prototype.today = function () {
    this.calendar.setYear(new Date().getFullYear());
    this.render();
  };

  UI.prototype.nextYear = function () {
    if (this.View_Mode === viewModes.YEAR_VIEW) {
      this.calendar.nextYear();
    } else {
      this.calendar.nextMonth();
    }
    this.render();
  };

  UI.prototype.previousYear = function () {
    if (this.View_Mode === viewModes.YEAR_VIEW) {
      this.calendar.previousYear();
    } else {
      this.calendar.previousMonth();
    }
    this.render();
  };

  function setTitles(calendar) {
    document.querySelector(".current-year").textContent = calendar.getYear();
    document.querySelector(".today").textContent = calendar.getToday();
  }

  return UI;
})();

export default UI;
