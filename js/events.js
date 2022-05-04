const returnCalendar = document.getElementById('back-btn');
const getCurrentDay = (e) => {
  const calendarEl = document.getElementById('calendar');
  const dayViewEl = document.getElementById('day-modal');
  const currentDayHeaderEl = document.getElementById('day-schedule');
  const headerEl = document.getElementById('header');
  const weekDays = document.getElementById('week-days');
  const footerEl = document.getElementById('footer');

  const dayChosen = e.currentTarget.id;
  console.log(dayChosen);
  const month = new Date().toLocaleString('default', { month: 'long' });
  calendarEl.style.display = 'none';
  dayViewEl.style.display = 'block';
  headerEl.style.display = 'none';
  weekDays.style.display = 'none';
  footerEl.style.display = 'none';
  currentDayHeaderEl.textContent = `${dayChosen} ${month}`;
};

returnCalendar.addEventListener ('click', backToCalendar)

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
