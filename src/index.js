
import loadStyle, { removeStyle } from "./js/styler.js";
import Note from "./js/Note.js";
import CalendarPlanner from "./js/CalendarPlanner.js";
import {
  getYearTitle,
  init,
  nextYear,
  previousYear,
  showYearTitle,
  today,
  VIEW_MODE,
} from "./js/UI.js";

window.addEventListener("load", initialCalendar);

function initialCalendar() {
  const calendar = new CalendarPlanner(new Date());
  const container = document.querySelector(".section-main");
  init(calendar, container);
  displayYear();
  // event listeners
  const btnToday = document.querySelector("#btnToday");
  const btnPreviousYear = document.querySelector("#btnPreviousYear");
  const btnNextYear = document.querySelector("#btnNextYear");

  function displayYear() {
    const headerYear = document.querySelector(".current-year");
    const headerToday = document.querySelector(".today");
    //if (View_Mode === "Year") {
    showYearTitle(headerYear);
    //} else if (View_Mode === "Month") {

    //headerYear.innerText = `${getMonthName(
    // Number(currentMonth)
    //)} ${headerTitleYear}`;
    //}
    //headerToday.innerText = headerTitleToday;
  }

  btnToday.addEventListener("click", (e) => {
    today();
    displayYear();
  });

  btnPreviousYear.addEventListener("click", (e) => {
    previousYear();
    displayYear();
  });

  btnNextYear.addEventListener("click", (e) => {
    nextYear();
    displayYear();
  });
}

//-------------------------

let calendarContainer = document.getElementById("calendar");

let btnCloseSidePanel = document.querySelector("#btnCloseSidePanel");
let sidePanel = document.querySelector(".side-panel");
let btnOpenNotes = document.querySelector("#btnOpenNotes");
const todoLabel = document.querySelectorAll(".todo__label");
const btnAdd = document.querySelector("#btnAddItem");
const btnCancel = document.querySelector("#btnCancel");
const todoContainer = document.querySelector(".todo__container");
const viewSelect = document.querySelector("#view");
const btnAddNote = document.querySelector(".button--add");
const additemcountainer = document.querySelector(".add-item__countainer");

let View_Mode = "Year";
let currentMonth = 0;

function setCalendarDaysClick() {
  const calendarDates = document.querySelectorAll(".days");
  addListenerToDays(calendarDates);
}

viewSelect.addEventListener("change", (e) => {
  const selected = e.target.value;
  if (selected === "Month") {
    ui.addMonthStyle();
    ui.viewMode = VIEW_MODE.MONTH;
    setViewMonth();
    updateHeaderTitles();
  } else if (selected === "Year") {
    ui.removeMonthStyle();
    ui.viewMode = VIEW_MODE.YEAR;

import loadStyle, { removeStyle } from "./js/styler.js";
import Note from "./js/Note.js";
import UI from "./js/UI.js";
import viewModes from "./js/ViewModes.js";

const ui = new UI();

document
  .querySelector("#btnToday")
  .addEventListener("click", (e) => ui.today());
document
  .querySelector("#btnNextYear")
  .addEventListener("click", (e) => ui.nextYear());
document
  .querySelector("#btnPreviousYear")
  .addEventListener("click", (e) => ui.previousYear());

document.querySelector("#view").addEventListener("change", (e) => {
  const selected = e.target.value;
  if (selected === "Month") {
    setUpMonthView();
  } else if (selected === "Year") {
    setupYearView();
}

function setViewYear() {
  setCalendarContainer(calendarContainer);
  createYear(thisDate);
  updateHeaderTitles();
  const calendarDates = document.querySelectorAll(".days");
  addListenerToDays(calendarDates);
}

function setViewMonth() {
  calendarContainer.innerHTML = createCalendar(
    new Date(currentYear, currentMonth, 1)
  );
  updateHeaderTitles();
}

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
      currentMonth = dayNumber.slice(4, 6);
      console.log(currentMonth);
      console.log(selectedDate);
      document.querySelector(".side-panel_date").innerText =
        selectedDate.toDateString();
    });
  });
}

btnCloseSidePanel.addEventListener("click", (e) => {
  console.log("clicked");
  sidePanel.classList.remove("active");
});

btnOpenNotes.addEventListener("click", (e) => {
  console.log("clicked");
  sidePanel.classList.toggle("active");
});

todoLabel.forEach((label) => {
  label.addEventListener("click", (e) => {
    e.target.classList.toggle("checked");
  });
});

function updateCalendar() {
  if (View_Mode === "Year") {
    setCurrentYear(thisDate, currentYear);
    saveYearToLocal(currentYear);
    setViewYear(thisDate);
  } else if (View_Mode === "Month") {
    console.log(currentMonth);
    setViewMonth(currentMonth);
  }

  const calendarDates = document.querySelectorAll(".days");
  console.log("dates:", calendarDates);
  addListenerToDays(calendarDates);
}

function setCurrentYear(date, year) {
  date.setFullYear(year);
  return date;
}

function saveYearToLocal(year) {
  localStorage.setItem("currentYear", year);
}

btnAdd.addEventListener("click", (e) => {
=======
document.querySelector("#btnCloseSidePanel").addEventListener("click", (e) => {
  document.querySelector(".side-panel").classList.remove("active");
});

document.querySelector("#btnOpenNotes").addEventListener("click", (e) => {
  document.querySelector(".side-panel").classList.toggle("active");
});

document.querySelector("#btnAddItem").addEventListener("click", (e) => {
  const input = document.querySelector("#newitem");
  const value = input.value;
  input.value = "";

  let todoRow = document.createElement("div");
  let label = document.createElement("label");
  let text = document.createTextNode(value);
  let btnDelete = document.createElement("button");
  let trash = document.createElement("i");
  trash.classList.add("fa", "fa-trash");

  todoRow.classList.add("todo__row");
  label.classList.add("todo__label");

  btnDelete.classList.add("btnDeleteItem");
  btnDelete.appendChild(trash);

  label.appendChild(text);
  todoRow.appendChild(label);
  todoRow.appendChild(btnDelete);
  todoContainer.appendChild(todoRow);

  btnDelete.addEventListener("click", () => {
    todoContainer.removeChild(todoRow);
  });

  label.addEventListener("click", (e) => {
    e.target.classList.toggle("checked");
  });

  input.focus();
});

document.querySelector("#btnCancel").addEventListener("click", () => {
  const container = document.querySelector(".add-item__countainer");
  container.classList.remove("show");
});

document.querySelector(".button--add").addEventListener("click", (e) => {
  const newNote = new Note();
  const notesContainer = document.querySelector(".todo__container");
  notesContainer.appendChild(newNote.createNote());
  notesContainer.lastChild.firstChild.focus();
});

const todoLabel = document.querySelectorAll(".todo__label");
const todoContainer = document.querySelector(".todo__container");

function setCalendarDaysClick() {
  const calendarDates = document.querySelectorAll(".days");
  addListenerToDays(calendarDates);
}

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
      currentMonth = dayNumber.slice(4, 6);

      document.querySelector(".side-panel_date").innerText =
        selectedDate.toDateString();
    });
  });
}

function setupYearView() {
  removeStyle("css/monthview.css");
  ui.setView(viewModes.YEAR_VIEW);
}

function setUpMonthView() {
  loadStyle("css/monthview.css");
  ui.setView(viewModes.MONTH_VIEW);
}

ui.render();
