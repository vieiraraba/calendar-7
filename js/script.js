const weekdaysIndexes = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6,
};

const userEventsArray = [];

const dateObj = new Date();
const day = dateObj.getDay();
const month = dateObj.getMonth();
const year = dateObj.getFullYear();
const formInputs = document.querySelectorAll('#event-form input');

const openEventModal = (e) => {
  console.log(e.currentTarget);
};
const addUserEvent = (e) => {
  e.preventDefault();

  const userEvent = {
    startEvent: formInputs[0].value,
    startDay: formInputs[0].value.split('T')[0].split('-')[2],
    startMonth: formInputs[0].value.split('T')[0].split('-')[1],
    startYear: formInputs[0].value.split('T')[0].split('-')[0],
    startHour: formInputs[0].value.split('T').pop().split(':')[0],
    startMinute: formInputs[0].value.split('T').pop().split(':')[1],
    endEvent: formInputs[1].value,
    endDay: formInputs[1].value.split('T')[0].split('-')[2],
    endMonth: formInputs[1].value.split('T')[0].split('-')[1],
    endYear: formInputs[1].value.split('T')[0].split('-')[0],
    endHour: formInputs[1].value.split('T').pop().split(':')[0],
    endMinute: formInputs[1].value.split('T').pop().split(':')[1],
    title: formInputs[2].value,
    location: formInputs[3].value,
  };
  if (!userEvent.startEven && !userEvent.endEvent) {
    console.log('please enter a valid date');
    return;
  } else {
    userEventsArray.push(userEvent);
  }
};

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
      dayEl.addEventListener('click', openEventModal);
    }
  }
};

onLoad();

// event listeners
document.getElementById('save-btn').addEventListener('click', addUserEvent);
