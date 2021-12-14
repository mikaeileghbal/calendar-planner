let calendarMonths = document.querySelectorAll(".month-container");
let year = document.querySelector(".current-year");
let yearHeader = document.querySelector(".year-header");
let btnAdd = document.querySelector(".btn-add");
let btnNext = document.querySelector(".month-btn--next");
let btnPrevious = document.querySelector(".month-btn--previous");
let currentMonth = 0;
let todoList = document.querySelector(".todo__container");

let btnToday = document.querySelector("#btnToday");
let btnPreviousYear = document.querySelector("#btnPreviousYear");
let btnNextYear = document.querySelector("#btnNextYear");





//pass index of each month as second parameter
calendarMonths.forEach((calendarItem, index) => {
	calendarItem.addEventListener("click", (e) => {
		//get clicked month's index;
		currentMonth = index;
		calendarItem.parentElement.classList.add("year-container--expand");
		calendarItem.scrollIntoView(false);
		yearHeader.classList.add("year-header--expand");

		//display btns on month view
		btnAdd.style.display = "flex";
		btnAdd.style.opacity = 1;
		btnNext.style.display = "block";
		btnPrevious.style.display = "block";

		//set previous and next buttons state
		setBtnState();

		//respond to seelected day in calendar
		const allTD = calendarItem.querySelectorAll(".days");
		allTD.forEach(function (td) {
			td.addEventListener("click", (e) => {
				//remove active class from prevous active day
				allTD.forEach(item => {
					item.parentElement.classList.remove("active");
				});
				//add active class to clicked day
				//e.target.parentElement.classList.add("active");
			});
		})

		// Show toto list
		todoList.classList.add("show");

	});
});

year.addEventListener("click", (e) => {
	console.log("clicked");
	calendarMonths[0].parentElement.classList.remove("year-container--expand");
	yearHeader.classList.remove("year-header--expand");

	//hide btns on year view
	btnAdd.style.display = "none";
	btnNext.style.display = "none";
	btnPrevious.style.display = "none";

	// hide todolist
	todoList.classList.remove("show")
});

//scroll month to next month
btnNext.addEventListener("click", (e) => {
	e.preventDefault();
	currentMonth++;
	if (currentMonth > 11) {
		currentMonth = 11;
	}
	//scroll the next month into the view
	calendarMonths[currentMonth].scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });
	//set buttons state based on current month
	setBtnState();
});

btnPrevious.addEventListener("click", (e) => {
	e.preventDefault();
	currentMonth--;
	if (currentMonth < 0) {
		currentMonth = 0;
	}
	//scroll the previous month into the view
	calendarMonths[currentMonth].scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });
	//set buttons state based on current month
	setBtnState();
});

function setBtnState() {
	//if month is first month
	//hide previous button
	if (currentMonth === 0) {
		btnPrevious.style.display = "none";
		return;
	}
	// If month is last month
	// hide next button
	else if (currentMonth === 11) {
		btnNext.style.display = "none";
		return;
	}

	// Here month is not first nor is last month
	// so both buttons are shown
	btnPrevious.style.display = "flex";
	btnNext.style.display = "flex";

}

// Add new note form functions

// Select add new note container 
const addFormContainer = document.querySelector(".add-item__countainer");

btnAdd.addEventListener("click", (e) => {
	e.preventDefault();
	addFormContainer.classList.add("show");
})


// Add new note form cancel button event handler
const btnCancel = document.querySelector(".month-btn--cancel");
btnCancel.addEventListener("click", (e) => {
	e.preventDefault();
	addFormContainer.classList.remove("show");

});

// Add new note form save button event handler
const btnSave = document.querySelector(".month-btn--save");
btnSave.addEventListener("click", (e) => {
	e.preventDefault();

	const description = document.querySelector("#add-item__input").value;
	let newTodo = new Todo("new item", description);
	todoList.appendChild(newTodo.getNode());

	addFormContainer.classList.remove("show");
})


// Show clock on top of page
let clock = document.querySelector(".time");

setInterval(setTime, 1000);

function setTime() {
	clock.innerText = new Date().toLocaleTimeString();
}


todoList.addEventListener("click", (e) => {
	let element = e.target;
	//console.log(element);
	if (element.classList.contains("button--check")) {
		element.parentElement.children[0].classList.toggle("checked");
		if (element.parentElement.children[0].classList.contains("checked")) {
			element.textContent = "Uncheck";
		}
		else {
			element.textContent = "Check";
		}
	} else if (element.classList.contains("button--delete")) {
		console.log("delete");
	}
})


btnToday.addEventListener("click", (e) => {
	e.preventDefault();
	currentYear = new Date().getFullYear();
	updateCalendar();
})

btnPreviousYear.addEventListener("click", (e) => {
	currentYear--;
	updateCalendar()
})

btnNextYear.addEventListener("click", (e) => {
	currentYear++;
	updateCalendar();
})

function updateCalendar() {
	setCurrentYear(thisDate, currentYear);
	createYear(thisDate);
}