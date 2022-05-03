const weekdaysIndexes = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6,
};

const userEvents = [];

const dateObj = new Date();
const day = dateObj.getDay();
const month = dateObj.getMonth();
const year = dateObj.getFullYear();
const formInputs = document.querySelectorAll('form input');
const formSelect = document.querySelector('form select');
const openEventModal = (e) => {};
const addUserEvent = (e) => {
    e.preventDefault();

    const userEvent = {
    title: formInputs[0].value,
    location: formInputs[1].value,
    startDate: formInputs[3].value,
    startTime: formInputs[4].value,
    endDate: formInputs[4].value,
    endTime: formInputs[5].value,
    eventType: formSelect.value,
    };
    console.log(userEvent);
};

document.getElementById('save-btn').addEventListener('click', addUserEvent);

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


