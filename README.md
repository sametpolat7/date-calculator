# Date Calculator

This project is a Date Calculator created using JavaScript. It calculates the difference between the date information provided by the user and today's date. The output is then presented to the user as the difference in years, months, days, hours, minutes, and seconds.

## Screen View
![Date Calculator](/assets/date-calculator.png)

## How it works?

1. The user is prompted to enter a date.
2. By clicking the "Calculate" button or pressing the Enter key, the `calc()` function is invoked.
3. `calc()` function calculates the date difference using "Date Get Methods".
4. If dayInfo is negative, it indicates a transition to the previous month. In this case, the monthInfo value is decremented, the total number of days in the previous month (the last day of the month) is obtained, and then added to dayInfo (with a negative sign). For example, if the result is 6 months -18 days, and the lastMonthDayInfo variable is set to 30, the function will convert it to 5 months 12 days.

## Quotes About Time

The `calc()` function generates a random number each time it is called. These numbers correspond to the indices of the "quotes" array, and a randomly selected quote from a predefined array is displayed at the bottom of the page.

### Quotes 
- "The two most powerful warriors are patience and time." - Leo Tolstoy, War and Peace.
- "Lost time is never found again." - Benjamin Franklin.
- "Time is the most valuable thing a man can spend." - Theophrastus.
- "It is the time you have wasted for your rose that makes your rose so important." – Antoine de Saint-Exupéry, The Little Prince.
- "Time is free, but it’s priceless. You can’t own it, but you can use it. You can’t keep it, but you can spend it. Once you’ve lost it you can never get it back." - Harvey Mackay
- "There is one kind of robber whom the law does not strike at, and who steals what is most precious to men: time." - Napoleon Bonaparte
- "You can’t have a better tomorrow if you are thinking about yesterday all the time." - Charles F. Kettering
- "If you love life, don’t waste time, for time is what life is made up of." - Bruce Lee
- "A man who dares to waste one hour of time has not discovered the value of life." - Charles Darwin
- "Your time is limited, so don’t waste it living someone else’s life." - Steve Jobs
- "Yesterday’s the past, tomorrow’s the future, but today is a gift. That’s why it’s called the present." - Bil Keane

## Error Checking

- Empty input is not allowed.
- Entering a date beyond today's date is not allowed.

**Author :** [Samet Polat](https://www.linkedin.com/in/sametpolat17/)