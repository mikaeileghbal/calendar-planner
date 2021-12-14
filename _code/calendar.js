/* Set the date displayed in the calendar */
//var thisDate = new Date("September 24, 2021");
let headerYear = document.querySelector(".current-year");
let headerToday = document.querySelector(".today");


let currentYear = "2023"; //new Date().getFullYear();
let thisDate = new Date();

thisDate = setCurrentYear(thisDate, currentYear);

var calendarContainer = document.getElementById("calendar");
let daycounter = 0;


//document.getElementById("year-head").textContent = thisDate.getFullYear();
createYear(thisDate);

function setCurrentYear(date, year) {
	date.setFullYear(year);
	return date;
}

function createYear(thisDate) {
	headerYear.innerText = thisDate.getFullYear();
	headerToday.innerText = thisDate.getDate();

	var output = "<div class='year-container'>";
	//let monthIndex = 0;
	for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
		var monthDate = new Date(thisDate.getFullYear(), monthIndex, 1);

		/* Write the calendar to the div with ID 'calendar' */
		output += createCalendar(monthDate);
	}
	calendarContainer.innerHTML = output + "</div>";
}


/* Function to generate calendar Table */
function createCalendar(calDate) {

	var calendareHtml = "<div class='month-container'>";
	calendareHtml += "<table id='calendar_table' class='calendar_table'>";
	calendareHtml += calCaption(calDate);
	calendareHtml += calWeakdayRow();
	calendareHtml += calDays(calDate);
	calendareHtml += "</table>";
	calendareHtml += "</div>";

	return calendareHtml;
}

/* function to write the calendar caption */

function calCaption(calDate) {
	var monthName = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	// determine the current month
	var thisMonth = calDate.getMonth();

	//determine the current year
	var thisYear = calDate.getFullYear();

	return (
		`<caption id="${monthName[thisMonth]}">` +
		monthName[thisMonth] +
		" " +
		"<span class='year' id='year'>" +
		thisYear +
		"</span></caption>"
	);
}

// function to write the table row of weakday names
function calWeakdayRow() {
	var weakdays = ["S", "M", "T", "W", "T", "F", "S"];
	var rowHtml = "<tr>";

	for (let i = 0; i < weakdays.length; i++) {
		rowHtml += "<th class='calendar-weakdays'>" + weakdays[i] + "</th>";
	}

	rowHtml += "</tr>";
	return rowHtml;
}

//function to calculate the numbers of days in the month
function daysInMonth(calDate) {
	// Array of days in each month
	var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	//Extract the four digit year and month values
	var thisYear = calDate.getFullYear();
	var thisMonth = calDate.getMonth();

	//Revise the days in February for Leap years
	if (thisYear % 4 === 0) {
		if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
			dayCount[1] = 29;
		}
	}

	//return the number of days for the current month
	return dayCount[thisMonth];
}

//Fnction to write table rows for each day of the month
function calDays(calDate) {
	//Determine the startin day of the month
	var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
	var weekDay = day.getDay();

	//Write blank cells preceding the starting day
	var htmlCode = "<tr>";
	for (var i = 0; i < weekDay; i++) {
		htmlCode += "<td class='empty'><div class='empty-day'></div></td>";
	}

	//Write cells for each day of the month
	var totalDays = daysInMonth(calDate);

	var highlightDay = new Date().getDate();
	var highlightMonth = new Date().getMonth();
	let sat = "";
	let fri = "";
	console.log(highlightDay, highlightMonth);

	for (var i = 1; i <= totalDays; i++) {
		day.setDate(i);
		weekDay = day.getDay();

		sat = weekDay === 6 ? "sat" : "";
		fri = weekDay === 5 ? "fri" : "";

		if (weekDay === 0) {
			htmlCode += "<tr>";
		}

		if (i === highlightDay && calDate.getMonth() === highlightMonth) {
			htmlCode +=
				`<td data-daynumber=${daycounter} class='calendar-dates ${sat} ${fri}' id='calendar-today'><div class='days'>` +
				i +
				dayEvents[i] +
				"</div></td>";
		} else {
			htmlCode +=
				`<td data-daynumber=${daycounter} class='calendar-dates ${sat} ${fri}'><div class='days'>` +
				i +
				dayEvents[i] +
				"</div></td>";
		}
		if (weekDay === 6) {
			htmlCode += "</tr>";
		}

		daycounter++;
	}

	//add extra empty days to table
	var day = new Date(calDate.getFullYear(), calDate.getMonth(), totalDays);
	var weekDay = day.getDay();

	for (var i = weekDay + 1; i < 7; i++) {
		htmlCode += "<td class='empty'><div class='empty-day'></div></td>";
	}
	htmlCode += "</tr>";

	return htmlCode;
}
