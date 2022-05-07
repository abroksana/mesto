export default class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._config = config;
    // this._buttonSubmitClass = config.buttonSubmitClass;
  };

  enableValidation = () => {
    this._inputsList = this._form.querySelectorAll(this._config.inputSelector); // Ищем в DOM все поля ввода
    this._submitButton = this._form.querySelector(this._config.buttonSubmitClass);
    this._setEventListeners(this._form, this._config, this._submitButton);

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault(); // убираем дефолтное поведение кнопки отправить форму
      this._disabledButton(this._submitButton, this._config);
    });
    this.toggleButtonState(this._submitButton, this._form.checkValidity(), this._config);
  };

  _setEventListeners = (form, config, buttonElement) => {
    // this.toggleButtonState(this._submitButton, this._form.checkValidity(), this._config);
    // обходим все поля ввода и вешаем на них слушатели
    this._inputsList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(form, inputElement, config); // проверям валидность формы
        this.toggleButtonState(buttonElement, form.checkValidity(), config); // проверяем состояние кнопки
      });
    });
  };

  // Фунция проверки состояния кнопки форм
  toggleButtonState = (buttonElement, isActive, config) => {
    // Если кнопка активна убираем класс и состояние, и наоборот
    if (isActive) {
      buttonElement.classList.remove(config.disableButtonClass);
      buttonElement.disabled = false;
    } else {
      this._disabledButton(buttonElement, config);
      // buttonElement.classList.add(config.disableButtonClass);
      buttonElement.disabled = true;
    };
  };

  _disabledButton = (buttonElement, config) => {
    // this._buttonElement = this._formElement.querySelector(this._buttonSubmitClass);

    buttonElement.classList.add(config.disableButtonClass);
    buttonElement.disabled = true;
  };

      // Функция проверяющая валидность поля ввода
  _checkInputValidity = (form, inputElement, config) => {
      // проверяем если не валидно запускаем показ ошибки, если валидно убираем
    if (!inputElement.validity.valid) {
      this._showInputError(form, inputElement, config) ;
    } else {
      this._hideInputError(form, inputElement, config) ;
    }
  };

  // Функция, которая удаляет класс с ошибкой
  _hideInputError = (form, inputElement, config) => {
    const errorElement = form.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.remove(config.activeErrorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(config.inputErrorClass); // Удаляем класс невалидного инпута
  };

  _showInputError = (form, inputElement, config) => {
    const errorElement = form.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.add(config.activeErrorClass); // Делаем ошибку видимой
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(config.inputErrorClass); // Добавляем класс невалидного инпута
  };
};

