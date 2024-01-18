

function calc() {
    const datepicker = document.getElementById("datepicker");

    let selectedDate = new Date(datepicker.value);
    let currentDate = new Date();

    let subtracDate = currentDate - selectedDate;
    let totalDays = Math.floor(subtracDate / 86400000) // One day = 86400000 ms

    let yearInfo = currentDate.getFullYear() - selectedDate.getFullYear();
    let monthInfo = currentDate.getMonth() - selectedDate.getMonth();
    let dayInfo = currentDate.getDate() - selectedDate.getDate();

    let lastMonthDayInfo;
    //If the dayInfo is negative, indicates a transition to the last day of the previous month. In this situation, the total number of days of the previous month should be taken and dayInfo(-) should be added to lastMonthDayInfo.
    if(dayInfo < 0) {
        monthInfo--;
        lastMonthDayInfo = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        dayInfo += lastMonthDayInfo;
    }

    if(monthInfo < 0) {
        yearInfo--;
        monthInfo += 12;
    }

    document.getElementById("days").innerHTML = `Result: <span class="main-result">${totalDays}</span> days.`;

    let result = "";
    if(yearInfo === 0) {
        result += "";
    } else if(yearInfo === 1) {
        result += yearInfo + " year, "
    } else {
        result += yearInfo + " years, "
    }

    if(monthInfo === 0) {
        result += "";
    } else if(monthInfo === 1) {
        result += monthInfo + " month, "
    } else {
        result += monthInfo + " months, "
    }

    if(dayInfo === 0) {
        result += "";
    } else if(dayInfo === 1) {
        result += dayInfo + " day."
    } else {
        result += dayInfo + " days."
    }

    document.getElementById("years-months").innerHTML = "Or " + result;
}