import createYear, {
  headerTitleYear,
  headerTitleToday,
  setCalendarContainer,
} from "./calendar.js";

let notes = [
  {
    date: "202112/20",
    description: "Today I am going to meet my friend.",
    todo: ["Meeting", "Reading", "Working"],
  },
  {
    date: "202112/20",
    description: "Today I am going to meet my friend.",
    todo: ["Meeting", "Reading", "Working"],
  },
  {
    date: "202112/20",
    description: "Today I am going to meet my friend.",
    todo: ["Meeting", "Reading", "Working"],
  },
  {
    date: "202112/20",
    description: "Today I am going to meet my friend.",
    todo: ["Meeting", "Reading", "Working"],
  },
  {
    date: "202112/20",
    description: "Today I am going to meet my friend.",
    todo: ["Meeting", "Reading", "Working"],
  },
];

console.log(notes);

let calendarContainer = document.getElementById("calendar");

let btnToday = document.querySelector("#btnToday");
let btnPreviousYear = document.querySelector("#btnPreviousYear");
let btnNextYear = document.querySelector("#btnNextYear");
let btnCloseSidePanel = document.querySelector("#btnCloseSidePanel");
let sidePanel = document.querySelector(".side-panel");
let btnOpenNotes = document.querySelector("#btnOpenNotes");

let currentYear =
  localStorage.getItem("currentYear") || new Date().getFullYear();

let thisDate = new Date(currentYear);

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

btnCloseSidePanel.addEventListener("click", (e) => {
  sidePanel.classList.remove("active");
});

btnOpenNotes.addEventListener("click", (e) => {
  sidePanel.classList.toggle("active");
});

function updateCalendar() {
  setCurrentYear(thisDate, currentYear);
  saveYearToLOcal(currentYear);
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

function saveYearToLOcal(year) {
  localStorage.setItem("currentYear", year);
}
