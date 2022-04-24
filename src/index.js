import loadStyle, { removeStyle } from "./js/styler.js";
import Note from "./js/Note.js";
import UI from "./js/UI.js";

const APP = (function () {
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
    ui.render();
  });

  document
    .querySelector("#btnCloseSidePanel")
    .addEventListener("click", (e) => {
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
    ui.View_Mode = viewModes.YEAR_VIEW;
  }

  function setUpMonthView() {
    loadStyle("css/monthview.css");
    ui.View_Mode = viewModes.MONTH_VIEW;
  }

  ui.render();
})();
