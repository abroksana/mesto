// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, activeErrorClass, inputErrorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass); // Добавляем класс невалидного инпута
  errorElement.textContent = errorMessage;
  errorElement.classList.add(activeErrorClass); // Делаем ошибку видимой
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, activeErrorClass, inputErrorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass); // Удаляем класс невалидного инпута
  errorElement.classList.remove(activeErrorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, activeErrorClass, inputErrorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, activeErrorClass, inputErrorClass);
  } else {
    hideInputError(formElement, inputElement, activeErrorClass, inputErrorClass);
  }
};

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const setEventListeners = (formElement) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(`.${classData.inputSelector}`));

  const buttonElement = formElement.querySelector(`.${classData.buttonSubmitClass}`);
  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement, classData.disableButtonClass);

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, classData.activeErrorClass, classData.inputErrorClass);
      toggleButtonState(inputList, buttonElement, classData.disableButtonClass);
    });
  });
};

const toggleButtonState = (inputList, buttonElement, disableButtonClass) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    disableButton(buttonElement, disableButtonClass);
  } else {
    // иначе сделай кнопку активной
    enableButton(buttonElement, disableButtonClass);
  }
};

const disableButton = (buttonElement, disableButtonClass) => {
  buttonElement.classList.add(disableButtonClass);
  buttonElement.setAttribute('disabled', true);
};

const enableButton = (buttonElement, disableButtonClass) => {
  buttonElement.classList.remove(disableButtonClass);
  buttonElement.removeAttribute('disabled');
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(`.${classData.formSelector}`));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
  const fieldsetList = Array.from(formElement.querySelectorAll('.popup__fieldset'));
  fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet);
  });
  });
};

const classData = {
  inputSelector: 'popup__input',
  formSelector: 'popup__container',
  buttonSubmitClass: 'popup__submit-button',
  disableButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  activeErrorClass: 'popup__input-error_active',
};

// Вызовем функцию
enableValidation(classData);
