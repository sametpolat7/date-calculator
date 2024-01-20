function enterFunc(event) {
    if(event.key === "Enter") {
        calc();
    }
}

function calc() {
    const datepicker = document.getElementById("datepicker");
    const resultArea = document.getElementById("result");
    const moreInfoArea = document.getElementById("moreInfo");
    const quotesArea = document.getElementById("quotes");

    let selectedDate = new Date(datepicker.value);
    let currentDate = new Date();

    let subtracDate = currentDate - selectedDate;
    let totalDays = Math.floor(subtracDate / 86400000) // One day = 86400000 ms

    let yearInfo = currentDate.getFullYear() - selectedDate.getFullYear();
    let monthInfo = currentDate.getMonth() - selectedDate.getMonth();
    let dayInfo = currentDate.getDate() - selectedDate.getDate();

    if (isNaN(totalDays) || isNaN(yearInfo) || isNaN(monthInfo) || isNaN(dayInfo)) { // Validation Control 1
        resultArea.classList.add("hidden");
        moreInfoArea.classList.add("hidden");
        quotesArea.classList.add("hidden");

        alert("Please enter a date.");

    }else if(selectedDate > currentDate) { // Validation Control 2
        resultArea.classList.add("hidden");
        moreInfoArea.classList.add("hidden");
        quotesArea.classList.add("hidden");

        alert("Please do not enter a date from the future.");

    } else {
        resultArea.classList.remove("hidden");
        moreInfoArea.classList.remove("hidden");
        quotesArea.classList.remove("hidden");
    }

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

    document.getElementById("days").innerHTML = `<span class="result-textcolor">${totalDays}</span> days.`;

    let result = "";
    if(yearInfo === 0) {
        result += "";
    } else if(yearInfo === 1) {
        result += `<span class="result-textcolor">${yearInfo}</span> year, `;
    } else {
        result += `<span class="result-textcolor">${yearInfo}</span> year, `;
    }

    if(monthInfo === 0) {
        result += "";
    } else if(monthInfo === 1) {
        result += `<span class="result-textcolor">${monthInfo}</span> month, `;
    } else {
        result += `<span class="result-textcolor">${monthInfo}</span> months, `
    }

    if(dayInfo === 0) {
        result += "";
    } else if(dayInfo === 1) {
        result += `<span class="result-textcolor">${dayInfo}</span> day.`;
    } else {
        result += `<span class="result-textcolor">${dayInfo}</span> days.`
    }

    document.getElementById("years-months").innerHTML = "Or " + result;

    moreInfoCalc(totalDays);
}

function moreInfoCalc(totalDays) {
    let howManyWeek = Math.floor(totalDays / 7);
    let daysOfWeek = totalDays % 7;

    let weekResult = "";
    if(howManyWeek === 0) {
        weekResult += "";
    } else if(howManyWeek === 1) {
        weekResult += `<span class="result-textcolor">${howManyWeek}</span> week,`
    } else {
        weekResult += `<span class="result-textcolor">${howManyWeek}</span> weeks,`
    }

    let dayResult = "";
    if(daysOfWeek === 0) {
        dayResult += "";
    } else if(daysOfWeek === 1 ) {
        dayResult += `<span class="result-textcolor">${daysOfWeek}</span> day.`
    } else {
        dayResult += `<span class="result-textcolor">${daysOfWeek}</span> days.`
    }

    document.getElementById("week").innerHTML = weekResult + " " + dayResult;

    let howManyHours = totalDays * 24;
    document.getElementById("hours").innerHTML = `<span class="result-textcolor">${howManyHours}</span> hours.`

    let howManyMinutes = howManyHours * 60;
    document.getElementById("minutes").innerHTML = `<span class="result-textcolor">${howManyMinutes}</span> minutes.`

    let howManySeconds = howManyMinutes * 60;
    document.getElementById("seconds").innerHTML = `<span class="result-textcolor">${howManySeconds}</span> seconds.`

    randomQuotes();
};

function randomQuotes() {
    const sentence = document.getElementById("sentence");
    const quotes = [
        '"The two most powerful warriors are patience and time." - Leo Tolstoy, War and Peace.',
        '"Lost time is never found again." - Benjamin Franklin.',
        '"Time is the most valuable thing a man can spend." - Theophrastus.',
        '"It is the time you have wasted for your rose that makes your rose so important." – Antoine de Saint-Exupéry, The Little Prince.',
        '"Time is free, but it’s priceless. You can’t own it, but you can use it. You can’t keep it, but you can spend it. Once you’ve lost it you can never get it back." - Harvey Mackay',
        '"There is one kind of robber whom the law does not strike at, and who steals what is most precious to men: time." - Napoleon Bonaparte',
        '"You can’t have a better tomorrow if you are thinking about yesterday all the time." - Charles F. Kettering',
        '"If you love life, don’t waste time, for time is what life is made up of." - Bruce Lee',
        '"A man who dares to waste one hour of time has not discovered the value of life." - Charles Darwin',
        '"Your time is limited, so don’t waste it living someone else’s life." - Steve Jobs',
        '"Yesterday’s the past, tomorrow’s the future, but today is a gift. That’s why it’s called the present." - Bil Keane'
    ];
    let randomIndex = Math.floor(Math.random() * 11);
    sentence.style.display = "block";
    document.getElementById("sentence").innerHTML = quotes[randomIndex];
}
