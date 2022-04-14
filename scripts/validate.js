// const formElement = popupPrflFrm.querySelector('.popup__container');
const formInput = formElement.querySelector('.popup__input');
const formError = formElement.querySelector(`#${formInput.id}-error`); // от id к id
// console.log(formInput.id);

// Функция, которая добавляет класс с ошибкой
const showInputError = (input, errorMessage) => {
  input.classList.add('popup__input_type_error'); // Добавляем класс невалидного инпута
  formError.textContent = errorMessage;
  formError.classList.add('popup__input-error_active'); // Делаем ошибку видимой
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (input) => {
  input.classList.remove('popup__input_type_error'); // Удаляем класс невалидного инпута
  formError.classList.remove('popup__input-error_active');
  formError.textContent = '';
};

const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showInputError(formInput, formInput.validationMessage);
  } else {
    hideInputError(formInput);
  }
};

formElement.addEventListener('submit', function (evt) {
evt.preventDefault();
});

formInput.addEventListener('input', function () {
checkInputValidity();
});



// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',

//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',

//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });

