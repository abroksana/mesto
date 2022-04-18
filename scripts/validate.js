// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error'); // Добавляем класс невалидного инпута
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active'); // Делаем ошибку видимой
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error'); // Удаляем класс невалидного инпута
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

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
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      checkInputValidity(formElement, inputElement);
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, buttonElement, classData.disableButtonClass);
    });
  });
};

const toggleButtonState = (inputList, buttonElement, disableButtonClass) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add(disableButtonClass);
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove(disableButtonClass);
  }
};


const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__container'));
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
  buttonSubmitClass: 'popup__submit-button',
  disableButtonClass: 'popup__submit-button_inactive'
  // inputErrorClass: 'popup__input_type_error',
  // activeErrorClass: 'popup__input-error_visible'
};

// Вызовем функцию
enableValidation(classData);

// const disableButtonClass = document.querySelector('.popup__submit-button_inactive');

