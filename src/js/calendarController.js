import CalendarModel from "./calendarModel.js";
import CalendarView from "./calendarView.js";

export default CalendarController;

function CalendarController(document) {
  this.document = document;
  this.view = null;
}

CalendarController.prototype.createCalendar = function (year) {
  this.view = new CalendarView(this.document, this, new CalendarModel(year));
};

CalendarController.prototype.setViewMonth = function () {
  this.view.renderWeekCalendar(this.view.model.getWeekCalendar());
};

CalendarController.prototype.today = function () {
  console.log("Today");
};

CalendarController.prototype.nextYear = function () {
  console.log("next year");
};

CalendarController.prototype.previousYear = function () {
  console.log("Previous year");
};
