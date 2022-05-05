import getCurrentDay from '../js/events.js';
import addUserEvent from './modal.js';
import userEventsArray from './modal.js';

// Variables
// ----------------------------------------------------------------
const weekdaysIndexes = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6,
};

const monthIndexes = {
  JAN: 0,
  FEB: 1,
  MAR: 2,
  APR: 3,
  MAY: 4,
  JUN: 5,
  JUL: 6,
  AUG: 7,
  SEP: 8,
  OCT: 9,
  NOV: 10,
  DEC: 11,
}

const handleDayViewEvents = () => {};

const dateObj = new Date();
const day = dateObj.getDay();
let month = dateObj.getMonth();
const year = dateObj.getFullYear();
const selectMonth = document.getElementById('select-month');
const monthDisplay = document.getElementById('month-display');;
const nextBtn = document.getElementById("next-month");
const previousBtn = document.getElementById("preview-month");
let nav = selectMonth.selectedIndex;

const showEventFromMonthView =(e) => {
  const circle = document.querySelector('.circle')
  const previewContainer = document.querySelector('.calendar-event-preview-container')
  if (e.currentTarget.child) {
    previewContainer.style.dispaly = 'block'
  }
}

const onLoad = (month=4) => {
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
      dayEl.addEventListener('mouseover', showEventFromMonthView)
    }
  }
};

// Event Listeners
// ----------------------------------------------------------------
previousBtn.addEventListener("click", previousMonth);
nextBtn.addEventListener("click", nextMonth);


// Functions
// ----------------------------------------------------------------
selectMonth.addEventListener('change', function (e) {
  const monthEl = document.querySelector('.month-wrapper');
  monthEl.replaceChildren()
  monthDisplay.textContent = this.value;
  onLoad(monthIndexes[e.target.value]);
});

// Buttons next/previous month
// ----------------------------------------------------------------
function nextMonth() {
  if (nav < 11) {
    nav++;
  } else {
    nav = 0;
  }
  selectMonth.selectedIndex = nav;
  const monthEl = document.querySelector('.month-wrapper');
  monthEl.replaceChildren()
  monthDisplay.textContent = selectMonth.value;
  onLoad(monthIndexes[selectMonth.value]);
};

function previousMonth() {
  if (nav > 0) {
    nav--;
  } else {
    nav = 11;
  }
  selectMonth.selectedIndex = nav;
  const monthEl = document.querySelector('.month-wrapper');
  monthEl.replaceChildren()
  monthDisplay.textContent = selectMonth.value;
  onLoad(monthIndexes[selectMonth.value]);
}
onLoad();