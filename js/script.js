import getCurrentDay from '../js/events.js';
import addUserEvent from './modal.js';

const weekdaysIndexes = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6,
};

const handleDayViewEvents = () => {};

const dateObj = new Date();
const day = dateObj.getDay();
const month = dateObj.getMonth();
const year = dateObj.getFullYear();


const onLoad = () => {
  const sumDaysOfCurrentMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfCurrentMonth = new Date(year, month, 1);
  const localesOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
  const dateToString = firstDayOfCurrentMonth.toLocaleDateString(
    'en-GB',
    localesOptions
  );
  const firstDayString = dateToString.split(',')[0];
  const firstDayindex = weekdaysIndexes[firstDayString];
  for (let i = 1; i <= firstDayindex + sumDaysOfCurrentMonth; i++) {
    const monthEl = document.querySelector('.month-wrapper');
    const dayEl = document.createElement('div');
    const pEl = document.createElement('p');
    dayEl.className = 'month-day-view';
    monthEl.appendChild(dayEl);

    if (i > firstDayindex) {
      pEl.textContent = i - firstDayindex;
      dayEl.appendChild(pEl);
      dayEl.id = i - firstDayindex;
      dayEl.addEventListener('click', getCurrentDay);
    }
  }
};

onLoad();

// event listeners
document.getElementById('save-btn').addEventListener('click', addUserEvent);
