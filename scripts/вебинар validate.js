const addPlaceForm = document.forms.place;
const editUserForm = document.forms.user;

const ERRORS = {
  wrongUrl: "Это должна быть ссылка",
  empty: "Это обязательное поле",
  wrongLength: "Введите значение от 2 до 30 символов",
};

const checkInputValidity = (input) => {
  input.setCustomValidity("");

  if (input.validity.valueMissing) {
    input.setCustomValidity(ERRORS.empty);
    return false;
  }

  if (input.validity.tooLong || input.validity.tooShort) {
    input.setCustomValidity(ERRORS.wrongLength);
    return false;
  }

  if (input.validity.typeMismatch && input.type === "url") {
    input.setCustomValidity(ERRORS.wrongUrl);
    return false;
  }

  return input.checkValidity();
};

const validateInput = (input) => {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);

  checkInputValidity(input);

  errorElement.textContent = input.validationMessage;
};

const handleInput =(event) => {
  const currentForm = event.currentTarget;
  const input = event.target;

  validateInput(input);

  console.log(input);
};

const handleSubmit = (event) => {
  // event.preventDefault();

  const currentForm = event.target;

  if (currentForm.checkValidity()) {
    currentForm.reset();
  }
};

addPlaceForm.addEventListener('submit', handleSubmit);
editUserForm.addEventListener('submit', handleSubmit);

addPlaceForm.addEventListener('input', handleInput);
editUserForm.addEventListener('input', handleInput);

// 32-59 по видео
