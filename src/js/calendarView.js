export default CalendarView;

function CalendarView(document, controller, model) {
  this.document = document;
  this.controller = controller;
  this.model = model;
  const _this = this;

  const btnToday = this.document.getElementById("btnToday");
  const btnNextYear = this.document.getElementById("btnNextYear");
  const btnPreviousYear = this.document.getElementById("btnPreviousYear");

  btnToday.addEventListener("click", setToday);
  btnNextYear.addEventListener("click", setNextYear);
  btnPreviousYear.addEventListener("click", setPreviousYear);

  function setToday() {
    _this.controller.today();
  }

  function setNextYear() {
    _this.controller.nextYear();
  }

  function setPreviousYear() {
    _this.controller.previousYear();
  }
}

CalendarView.prototype.renderWeekCalendar = function (week) {
  const div = this.document.createElement("div");
  div.textContent = week.Week;
  //this.document.body.appendChild(div);
};
