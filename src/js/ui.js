import loadStyle, { removeStyle } from "./styler.js";

export const VIEW_MODE = {
  YEAR: "YEAR",
  MONTH: "MONTH",
};

let viewMode = VIEW_MODE.YEAR;
let calendar = null;
let container = null;

function setYear() {
  container.firstElementChild.remove();
  container.prepend(calendar.getYearCalendar());
}

function setMonth(month = new Date()) {
  container.firstElementChild.remove();
  const div = document.createElement("div");
  div.className = "calendar";
  div.innerHTML = calendar.getMonthCalenar(month);
  container.prepend(div);
}

const ui = {
  init: function (calendarObj, containerElement) {
    calendar = calendarObj;
    container = containerElement;
    setYear();
  },

  addMonthStyle: function () {
    loadStyle("css/monthview.css");
  },

  removeMonthStyle: function () {
    removeStyle("css/monthview.css");
  },

  today: function () {
    calendar.today();
    setYear();
  },

  nextYear: function () {
    calendar.nextYear();
    setYear();
  },

  previousYear: function () {
    calendar.previousYear();
    setYear();
  },

  showYearTitle: function (element) {
    element.textContent = calendar.getYear();
  },

  showDayOnMonth(element) {
    element.textContent = calendar.getDayOfMonth();
  },

  showYearCalendar: function () {
    setYear();
  },

  showMonthCalendar: function () {
    setMonth();
  },
};

export default ui;
