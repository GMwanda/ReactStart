const calendar = document.querySelector(".calendar"),
    date = document.querySelector(".date"),
    daysContainer = document.querySelector(".days"),
    prev = document.querySelector(".bx-caret-left-circle"),
    next = document.querySelector(".bx-caret-right-circle");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
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

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);