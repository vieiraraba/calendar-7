import getCurrentDay from '../js/events.js';
import getEvents from '../js/modal.js'
import userEventsArray from './modal.js'

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

const showEventFromMonthView =(e) => {
  const circle = document.querySelector('.circle')
  const previewContainer = document.querySelector('.calendar-event-preview-container')
  console.log(e.currentTarget.contains(circle))
  if (e.currentTarget.child) {
    previewContainer.style.dispaly = 'block'
  }
}

const onLoad = (month=4) => {
  const localStorageEvents = JSON.parse(localStorage.getItem('events'))
  
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
      // let number = dateObj.getMonth()
      // getEvents(localStorageEvents)
      console.log(localStorageEvents)
    }
  }
};



// Functions
// ----------------------------------------------------------------
selectMonth.addEventListener('change', function (e) {
  const monthEl = document.querySelector('.month-wrapper');
  monthEl.replaceChildren() 
  monthDisplay.textContent = this.value;
  onLoad(monthIndexes[e.target.value]);
  });

onLoad();

//event listeners
//ocument.getElementById('save-btn').addEventListener('click', addUserEvent);
