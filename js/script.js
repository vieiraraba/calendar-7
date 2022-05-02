// const monthsOf2002 = [
//   [2022, 1],
//   [2022, 2],
//   [2022, 3],
//   [2022, 4],
//   [2022, 5],
//   [2022, 6],
//   [2022, 7],
//   [2022, 8],
//   [2022, 9],
//   [2022, 10],
//   [2022, 11],
//   [2022, 12],
// ];

const getDaysArray = (year, month) => {
    const monthIndex = month - 1;
    const names = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    ];
    const date = new Date(year, monthIndex, 1);
    const result = [];
    while (date.getMonth() === monthIndex) {
    result.push(date.getDate() + ' ' + names[date.getDay()]);
    date.setDate(date.getDate() + 1);
    }
    return result;
};

const array = getDaysArray(2022, 5);
const createMonthLayout = (day) => {
    const monthEl = document.querySelector('.month-wrapper');
    const dayEl = document.createElement('div');
    const h3El = document.createElement('h3');
    h3El.innerText = day;
    h3El.className = 'month-day-title';
    dayEl.className = 'month-day-view';
    monthEl.appendChild(dayEl);
    dayEl.appendChild(h3El);
};

array.forEach((day) => {
    createMonthLayout(day);
    // console.log(day);
});