const getCurrentDay = (e) => {
  const calendarEl = document.getElementById('calendar');
  const dayViewEl = document.getElementById('day-modal');
  const currentDayHeaderEl = document.getElementById('day-schedule');
  const headerEl = document.getElementById('header');

  const dayChosen = e.currentTarget.id;
  console.log(dayChosen);
  const month = new Date().toLocaleString('default', { month: 'long' });
  calendarEl.style.display = 'none';
  dayViewEl.style.display = 'block';
  headerEl.style.display = 'none';
  currentDayHeaderEl.textContent = `${dayChosen} ${month}`;
};

export default getCurrentDay;
