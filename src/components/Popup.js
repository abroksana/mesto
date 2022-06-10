/* класс Popup, который отвечает за открытие и закрытие попапа */
export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeWithClick = this._closeWithClick.bind(this);
    this._popupButtonSave = this._popup.querySelector('.popup__submit-button')
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

  loading(loading, text) {
    if (loading) {
      this._popupButtonSave.textContent = 'Сохранение...';
    } else {
      this._popupButtonSave.textContent = text;
    }
  }
}
