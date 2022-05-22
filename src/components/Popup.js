/* класс Popup, который отвечает за открытие и закрытие попапа */
export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeWithClick = this._closeWithClick.bind(this);
  }

/* публичный метод open, который отвечает за открытие попапа. */
  open() {
    this._popup.classList.add('popup_opened');
    this._popup.addEventListener('mousedown', this._closeWithClick); // closePopup in 7
    document.addEventListener(`keydown`, this._handleEscClose);  // handleEscPress in 7
  }

/* публичный метод close, который отвечает за закрытие попапа. */
  close() {
    this._popup.classList.remove('popup_opened');
    this._popup.removeEventListener('mousedown', this._closeWithClick); // closePopup in 7
    document.removeEventListener(`keydown`, this._handleEscClose);  // handleEscPress in 7
  }

/* публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа */
  setEventListeners() {
    this._popup
      .querySelector('.popup__close-button')
      .addEventListener('click', this.close);
  }

/* приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc */
  _handleEscClose(evt) {  // handleEscPress in 7
      if (evt.key === 'Escape') {
        this.close();
      }
  }

/* Модальное окно закрывается при клике на затемнённую область вокруг формы */
  _closeWithClick(evt) { // closePopup in 7
    if (evt.currentTarget === evt.target) {
      this.close();
    }
  }
}

// Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
// Принимает в конструктор единственный параметр — селектор попапа.
// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
// Модальное окно также закрывается при клике на затемнённую область вокруг формы

/*

const popupCardAddName = popupCardAdd.querySelector('.popup__input_type_title'); // инпут названия
const popupCardAddLink = popupCardAdd.querySelector('[name="link-image"]'); // // инпут ссылки / изображения
у тебя поля в объекте не совпадают с теми, что ты ожидаешь в createCard

*/
