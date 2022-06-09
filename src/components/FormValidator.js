export class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._inputSelector = config.inputSelector;
    this._buttonSubmitClass = config.buttonSubmitClass; //  popup__submit-button
    this._disableButtonClass = config.disableButtonClass; // popup__submit-button_inactive
    this._inputErrorClass = config.inputErrorClass;
    this._activeErrorClass = config.activeErrorClass;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonElement = this._form.querySelector(this._buttonSubmitClass);
  };

  /* показ ошибок */
  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.add(this._activeErrorClass); // Делаем ошибку видимой
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._inputErrorClass); // Добавляем класс невалидного инпута
  };

  /* сокрытие ошибок */
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.remove(this._activeErrorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._inputErrorClass); // Удаляем класс невалидного инпута
  };

  /* проверка полей на валидацию */
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  /* Функция проверяющая валидность поля ввода */
  _checkInputValidity(inputElement) {
      // проверяем если не валидно запускаем показ ошибки, если валидно убираем
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  /* обработка форм */
  _setEventListeners() {
    this.toggleButtonState();
    // обходим все поля ввода и вешаем на них слушатели
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement); // проверям валидность формы
        this.toggleButtonState(); // проверяем состояние кнопки
      });
    });
  };

  /* деактивация кнопок если проверка не пройдена */
  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
      this._buttonElement.classList.add(this._disableButtonClass);
    } else {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(this._disableButtonClass);
    }
  }

  /* включение валидации */
	enableValidation() {
		this._form.addEventListener('submit', evt => {
			evt.preventDefault();
		});
		this._setEventListeners();
	}

  /* метод очистки ошибок */
  resetValidation() {
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
};
