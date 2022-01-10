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
const todoLabel = document.querySelectorAll(".todo__label");
console.log(todoLabel);

let currentYear =
  localStorage.getItem("currentYear") || new Date().getFullYear();

let thisDate = new Date(currentYear);
thisDate.setDate(new Date().getDate());
thisDate.setMonth(new Date().getMonth());

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
      days.forEach((day) => {
        day.classList.remove("selected");
      });
      day.classList.add("selected");

      const dayNumber = e.target.dataset.daynumber;

      const selectedDate = new Date(
        dayNumber.slice(0, 4),
        dayNumber.slice(4, 6),
        dayNumber.slice(6, 8)
      );
      console.log(selectedDate);
      document.querySelector(".side-panel_date").innerText =
        selectedDate.toDateString();
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

todoLabel.forEach((label) => {
  label.addEventListener("click", (e) => {
    e.target.classList.toggle("checked");
  });
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
