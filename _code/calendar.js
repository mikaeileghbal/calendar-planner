/* Set the date displayed in the calendar */

let headerYear = document.querySelector(".current-year");
let headerToday = document.querySelector(".today");

let currentYear = new Date().getFullYear();
let thisDate = new Date();

thisDate = setCurrentYear(thisDate, currentYear);

let calendarContainer = document.getElementById("calendar");
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

	let output = "<div class='year-container'>";
	//let monthIndex = 0;
	for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
		let monthDate = new Date(thisDate.getFullYear(), monthIndex, 1);

		/* Write the calendar to the div with ID 'calendar' */
		output += createCalendar(monthDate);
	}
	calendarContainer.innerHTML = output + "</div>";
}


/* Function to generate calendar Table */
function createCalendar(calDate) {

	let calendareHtml = "<div class='month-container'>";
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
	let monthName = [
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
	let thisMonth = calDate.getMonth();

	//determine the current year
	let thisYear = calDate.getFullYear();

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
	let weakdays = ["S", "M", "T", "W", "T", "F", "S"];
	let rowHtml = "<tr>";

	for (let i = 0; i < weakdays.length; i++) {
		rowHtml += "<th class='calendar-weakdays'>" + weakdays[i] + "</th>";
	}

	rowHtml += "</tr>";
	return rowHtml;
}

//function to calculate the numbers of days in the month
function daysInMonth(calDate) {
	// Array of days in each month
	let dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	//Extract the four digit year and month values
	let thisYear = calDate.getFullYear();
	let thisMonth = calDate.getMonth();

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
	let day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
	let weekDay = day.getDay();

	//Write blank cells preceding the starting day
	let htmlCode = "<tr>";
	for (let i = 0; i < weekDay; i++) {
		htmlCode += "<td class='empty'><div class='empty-day'></div></td>";
	}

	//Write cells for each day of the month
	let totalDays = daysInMonth(calDate);

	let highlightDay = new Date().getDate();
	let highlightMonth = new Date().getMonth();
	let sat = "";
	let fri = "";
	console.log(highlightDay, highlightMonth);

	for (let i = 1; i <= totalDays; i++) {
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
	day = new Date(calDate.getFullYear(), calDate.getMonth(), totalDays);
	weekDay = day.getDay();

	for (let i = weekDay + 1; i < 7; i++) {
		htmlCode += "<td class='empty'><div class='empty-day'></div></td>";
	}
	htmlCode += "</tr>";

	return htmlCode;
}
