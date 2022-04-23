import CalendarPlanner from "./js/CalendarPlanner.js";
import loadStyle, { removeStyle } from "./js/styler.js";
import Note from "./js/Note.js";
import viewModes from "./js/ViewModes.js";

//import createYear, { createCalendar, getMonthName } from "./js/calendar.js";

const APP = (function () {
  let View_Mode = viewModes.YEAR_VIEW;
  let currentMonth = 0;

  const calendar = new CalendarPlanner(new Date());
  const btnNextYear = document.querySelector("#btnNextYear");
  const btnPreviousYear = document.querySelector("#btnPreviousYear");
  const btnToday = document.querySelector("#btnToday");

  function init() {
    const section = document.querySelector(".section-main");

    section.replaceChild(
      calendar.getYearCalendar(),
      document.querySelector(".calendar")
    );

    document.querySelector(".current-year").textContent = calendar.getYear();
    document.querySelector(".today").textContent = calendar.getToday();
  }

  btnToday.addEventListener("click", today);
  btnNextYear.addEventListener("click", nextYear);
  btnPreviousYear.addEventListener("click", previousYear);

  function today() {
    calendar.setYear(new Date().getFullYear());
    init();
  }

  function nextYear() {
    if (View_Mode === viewModes.YEAR_VIEW) {
      calendar.nextYear();
    } else {
      calendar.nextMonth();
    }
    init();
  }

  function previousYear() {
    if (View_Mode === viewModes.YEAR_VIEW) {
      calendar.previousYear();
    } else {
      calendar.previousMonth();
    }
    init();
  }

  init();
})();

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

console.log(btnAdd);
console.log(btnCancel);
console.log(todoContainer);

console.log(todoLabel);

let currentYear =
  localStorage.getItem("currentYear") || new Date().getFullYear();

let thisDate = new Date(currentYear);
thisDate.setDate(new Date().getDate());
thisDate.setMonth(new Date().getMonth());
console.log(thisDate);

// Show clock on top of page
let clock = document.querySelector(".time");

setInterval(setTime, 1000);

function setTime() {
  clock.innerText = new Date().toLocaleTimeString();
}

function setCalendarDaysClick() {
  const calendarDates = document.querySelectorAll(".days");
  addListenerToDays(calendarDates);
}

window.addEventListener("load", () => {
  //setViewYear();
  //setCalendarDaysClick();
});

viewSelect.addEventListener("change", (e) => {
  const selected = e.target.value;
  if (selected === "Month") {
    loadStyle("css/monthview.css");
    View_Mode = "Month";
    setViewMonth();
    updateHeaderTitles();
  } else if (selected === "Year") {
    removeStyle("css/monthview.css");
    View_Mode = "Year";
  }
  updateCalendar();

  setCalendarDaysClick();
});

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

function updateHeaderTitles() {
  const headerYear = document.querySelector(".current-year");
  const headerToday = document.querySelector(".today");
  if (View_Mode === "Year") {
    //headerYear.innerText = headerTitleYear;
  } else if (View_Mode === "Month") {
    console.log(Number(currentMonth));
    //headerYear.innerText = `${getMonthName(
    // Number(currentMonth)
    //)} ${headerTitleYear}`;
  }
  headerToday.innerText = headerTitleToday;
}

function setCurrentYear(date, year) {
  date.setFullYear(year);
  return date;
}

function saveYearToLocal(year) {
  localStorage.setItem("currentYear", year);
}

btnAdd.addEventListener("click", (e) => {
  const input = document.querySelector("#newitem");
  const value = input.value;
  input.value = "";

  let todoRow = document.createElement("div");
  let label = document.createElement("label");
  //let check = document.createElement("input");
  let text = document.createTextNode(value);
  let btnDelete = document.createElement("button");
  let trash = document.createElement("i");
  trash.classList.add("fa", "fa-trash");

  todoRow.classList.add("todo__row");
  label.classList.add("todo__label");
  //check.type = "checkbox";
  //check.classList.add("todo__check");
  //text.innerText = value;

  btnDelete.classList.add("btnDeleteItem");
  btnDelete.appendChild(trash);

  //label.appendChild(check);
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

btnCancel.addEventListener("click", () => {
  const container = document.querySelector(".add-item__countainer");
  container.classList.remove("show");
});

btnAddNote.addEventListener("click", (e) => {
  //additemcountainer.classList.toggle("show");
  const newNote = new Note();
  const notesContainer = document.querySelector(".todo__container");
  notesContainer.appendChild(newNote.createNote());
  notesContainer.lastChild.firstChild.focus();
});
