import loadStyle, { removeStyle } from "./styler.js";

export const VIEW_MODE = {
  YEAR: "YEAR",
  MONTH: "MONTH",
};

let viewMode = VIEW_MODE.YEAR;
let calendar = null;
let container = null;

export function init(calendarObj, containerElement) {
  calendar = calendarObj;
  container = containerElement;
  showCalendar();
}

export function addMonthStyle() {
  loadStyle("css/monthview.css");
}

export function removeMonthStyle() {
  removeStyle("css/monthview.css");
}

export function today() {
  calendar.today();
  showCalendar();
}

export function nextYear() {
  calendar.nextYear();
  showCalendar();
}

export function previousYear() {
  calendar.previousYear();
  showCalendar();
}

export function showYearTitle(element) {
  element.textContent = calendar.getYear();
}

function showCalendar() {
  container.firstElementChild.remove();
  container.prepend(calendar.getYearCalendar());
}
