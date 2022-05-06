import {monthIndexes} from './main.js'

// Variables
// ----------------------------------------------------------------
const returnCalendar = document.getElementById('back-btn');
const getCurrentDay = (e) => {
  const localStorageEvents = JSON.parse(localStorage.getItem('events'))
  const calendarEl = document.getElementById('calendar');
  const dayViewEl = document.getElementById('day-modal');
  const currentDayHeaderEl = document.getElementById('day-schedule');
  const headerEl = document.getElementById('header');
  const weekDays = document.getElementById('week-days');
  const footerEl = document.getElementById('footer');
  const dayChosen = e.currentTarget.id;
  const month = document.getElementById('select-month').value;

  localStorageEvents.forEach(event => {
    const monthEvents = event[monthIndexes[month]]
    monthEvents.forEach(event => {
    const hourEl = document.getElementById(`hours-${event.startHour}`)
    const h4El = document.createElement('h4')
    h4El.classList.add('event-display')
    h4El.textContent = event.title
    hourEl.appendChild(h4El)
  })
  })
  calendarEl.style.display = 'none';
  dayViewEl.style.display = 'block';
  headerEl.style.display = 'none';
  weekDays.style.display = 'none';
  footerEl.style.display = 'none';
  currentDayHeaderEl.textContent = `${dayChosen} ${month}`;

};

// Event listeners
// ----------------------------------------------------------------
returnCalendar.addEventListener('click', backToCalendar);

// Functions
// ----------------------------------------------------------------
function backToCalendar() {
  const calendarEl = document.getElementById('calendar');
  const dayViewEl = document.getElementById('day-modal');
  const currentDayHeaderEl = document.getElementById('day-schedule');
  const headerEl = document.getElementById('header');
  const weekDays = document.getElementById('week-days');
  const footerEl = document.getElementById('footer');
  calendarEl.style.display = 'flex';
  dayViewEl.style.display = 'none';
  headerEl.style.display = 'flex';
  weekDays.style.display = 'flex';
  footerEl.style.display = 'flex';
}
export default getCurrentDay;
