const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const formInputs = document.querySelectorAll('#event-form input');
const dataSaveBtn = document.querySelector('[data-save-button]');
const userEventsArray = [];

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  const inputFields = document.querySelectorAll('#event-form input');
  const eventDetails = document.getElementById('event-details');
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
  eventDetails.value = '';
  inputFields.forEach((input) => (input.value = ''));
}

const saveEvent = (e, modal) => {
  if (modal == null) return;
  console.log(modal, 'this is modal');
  modal.classList.remove('active');
  overlay.classList.remove('active');
  eventDetails.value = '';
  inputFields.forEach((input) => (input.value = ''));
};

const addUserEvent = (e, modal) => {
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
    console.log(userEventsArray);
  }
};
dataSaveBtn.addEventListener('click', saveEvent);

export default addUserEvent;
