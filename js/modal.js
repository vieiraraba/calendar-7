const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const formInputs = document.querySelectorAll('#event-form input');
const dataSaveBtn = document.querySelectorAll('[data-save-button]');
const inputFields = document.querySelectorAll('#event-form input');
const eventDetails = document.getElementById('event-details');
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

dataSaveBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
    const modal = button.closest('.modal');
    const validationResult = addUserEvent(e, modal);

    if (validationResult) {
      dataSave(modal);
    }
  });
});

function openModal(modal) {
  inputFields;
  eventDetails;
  if (modal == null) return;
  // console.log('modal', modal?.querySelector('form'));
  modal.querySelector('form').reset();
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
  eventDetails.value = '';
  inputFields.forEach((input) => (input.value = ''));
}

function dataSave(modal) {
  if (modal == null) return;
  console.log(modal, 'this is modal');
  modal.classList.remove('active');
  overlay.classList.remove('active');
  eventDetails.value = '';
  let daySel = document.getElementById('10');
  daySel.classList.add('circle');
}

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

  const allInputs = document.querySelectorAll('.redColor', '.fontSmall');
  allInputs.forEach((input) => {
    input.textContent = '';
  });

  if (!userEvent.startEvent) {
    let errorParagraph = document.querySelector('#event-start ~ p');
    errorParagraph.textContent = 'Please enter a valid date';
  }
  if (!userEvent.endEvent) {
    let errorParagraph = document.querySelector('#event-end ~ p');
    errorParagraph.textContent = 'Please enter a valid date';
  }
  if (!userEvent.location) {
    let errorParagraph = document.querySelector('#event-location ~ p');
    errorParagraph.textContent = 'Location required';
  }
  if (!userEvent.title) {
    let errorParagraph = document.querySelector('#event-title ~ p');
    errorParagraph.textContent = 'Title required';
  }

  // userEventsArray.push(userEvent);
  if (
    userEvent.startEvent &&
    userEvent.endEvent &&
    userEvent.location &&
    userEvent.title
  ) {
    return true;
  } else {
    return false;
  }
};

// document.querySelector('#event-start').addEventListener('change', (ev) => {
//   if (ev) {
//     let errorParagraph = document.querySelector('#event-start ~ p');
//     errorParagraph.textContent = '';
//   }
// });

export default addUserEvent;
