import createYear, {
  headerTitleYear,
  headerTitleToday,
  setCalendarContainer,
} from "./calendar.js";

let calendarContainer = document.getElementById("calendar");

let btnToday = document.querySelector("#btnToday");
let btnPreviousYear = document.querySelector("#btnPreviousYear");
let btnNextYear = document.querySelector("#btnNextYear");

let currentYear = new Date().getFullYear();
let thisDate = new Date();

// Show clock on top of page
let clock = document.querySelector(".time");

setInterval(setTime, 1000);

function setTime() {
  clock.innerText = new Date().toLocaleTimeString();
}

window.addEventListener("load", () => {
  setCalendarContainer(calendarContainer);
  createYear(thisDate);
  updateHeaderTitles();

  const calendarDates = document.querySelectorAll(".days");
  addListenerToDays(calendarDates);
});

function addListenerToDays(days) {
  days.forEach((day) => {
    day.addEventListener("click", (e) => {
      console.log(e.target.dataset.daynumber);
    });
  });
}

btnToday.addEventListener("click", (e) => {
  e.preventDefault();
  currentYear = new Date().getFullYear();
  updateCalendar();
});

btnPreviousYear.addEventListener("click", (e) => {
  currentYear--;
  updateCalendar();
});

btnNextYear.addEventListener("click", (e) => {
  currentYear++;
  updateCalendar();
});

function updateCalendar() {
  setCurrentYear(thisDate, currentYear);
  createYear(thisDate);
  updateHeaderTitles();

  const calendarDates = document.querySelectorAll(".days");
  addListenerToDays(calendarDates);
}

function updateHeaderTitles() {
  const headerYear = document.querySelector(".current-year");
  const headerToday = document.querySelector(".today");
  headerYear.innerText = headerTitleYear;
  headerToday.innerText = headerTitleToday;
}

function setCurrentYear(date, year) {
  date.setFullYear(year);
  return date;
}
