const calendar = document.querySelector(".calendar"),
    date = document.querySelector(".date"),
    daysContainer = document.querySelector(".days"),
    prev = document.querySelector(".bx-caret-left-circle"),
    next = document.querySelector(".bx-caret-right-circle"),
    todayyBtn = document.querySelector(".today-btn"),
    gotobtn = document.querySelector(".goto-btn "),
    dateInput = document.querySelector(".date-input");


let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
];

const eventsArr = [
    {
        day: 22,
        month: 2,
        year: 2011,
        events: [
            {
                title: "Lorem ipsum dolor sit amet, consectetur adip",
                time: "10:00 AM"
            },
            {
                title: "Dolor ipsum dolor sit amet, consect",
                time: "10:00 PM"
            },
        ],
    },
];

// Function to add days

function initCalendar() {
    // to gett prev month days and current month all days and next month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    // update date at top of calendar
    date.innerHTML = months[month] + " " + year;

    //addingdays
    let days = "";

    // TODAY
    for (let x = day; x > 0; x--) {
        days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
    }

    // DATES OF PRESENT MONTH
    for (let x = 1; x <= lastDate; x++) {
        if (x === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()) {
            days += `<div class="day today">${x}</div>`;
        } else {
            days += `<div class="day">${x}</div>`;
        }
    }

    // DAYS OF THE NEXT MONTH
    for (let x = 1; x <= nextDays; x++) {
        days += `<div class="day next-date">${x}</div>`;
    }

    daysContainer.innerHTML = days;

}

initCalendar();


function prevMonth() {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    initCalendar();
}

function nextMonth() {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    initCalendar();
}
// buttons
prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

// GOES TO TODAY
todayyBtn.addEventListener("click", () => {
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    initCalendar();
});

dateInput.addEventListener("keyup", () => {
    // ALLOW ONLY NUMBERS REMOVE ANYTHING ELSE
    dateInput.value = dateInput.value.replace(/[^0-9/]/g, '');

    if (dateInput.value.length === 2) {
        // ADD SLASH IF 2 NUMBERS ENTERED
        dateInput.value += "/";
    }
    if (dateInput.value.length > 7) {
        // DONT ALLOW MORE THAN 7 CHARACTERS
        dateInput.value = dateInput.value.slice(0, 7);
    }
    // IF backspace is pressed
    if (e.inputType = "deleteContentBackward") {
        if (dateInput.value.length === 3) {
            dateInput.value = dateInput.value.slice(0, 2);
        }
    }

});

gotobtn.addEventListener("click", gotoDate);

function gotoDate() {
    const dateArr = dateInput.value.split("/");

    if (dateArr.length === 2) {
        if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
            month === dateArr[0] - 1;
            year = dateArr[1];
            initCalendar();
            return;
        }
    }

    alert("Invalid date");
}

const addEventBtn = document.querySelector(".add-event"),
    addEventContainer = document.querySelector(".add-event-wrapper"),
    addEventCloseBtn = document.querySelector(".bx-x"),
    addEventTitle = document.querySelector(".event-name"),
    addEventFrom = document.querySelector(".event-name-from"),
    addEventTo = document.querySelector(".event-name-to");

addEventBtn.addEventListener("click", () => {
    addEventContainer.classList.toggle("active");
});
addEventCloseBtn.addEventListener("click", () => {
    addEventContainer.classList.remove("active");
});

document.addEventListener("click", (e) => {
    if (e.target != addEventBtn && !addEventContainer.contains(e.target)) {
        addEventContainer.classList.remove("active");
    }
});

addEventTitle.addEventListener("input", (e) => {
    addEventTitle.value = addEventTitle.value.slice(0, 50)
});

addEventFrom.addEventListener("input", (e) => {
    // remove anything else numbers
    addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
    if (addEventFrom.value.length === 2) {
        addEventFrom.value += ":";
    }
    if (addEventFrom.value.length > 5) {
        addEventFrom.value = addEventFrom.value.slice(0, 5);
    }
});

addEventTo.addEventListener("input", (e) => {
    // remove anything else numbers
    addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
    if (addEventTo.value.length === 2) {
        addEventTo.value += ":";
    }
    if (addEventTo.value.length > 5) {
        addEventTo.value = addEventTo.value.slice(0, 5);
    }
});