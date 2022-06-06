import {Popup} from './Popup.js';

export class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._button = this._popup.querySelector('.popup__submit-button'); /* popup__button реализовать */
  }

  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener('click', () => {
      this._handleSubmitCallback();
    });
  }

  setSubmitCallback(callback) {
    this._handleSubmitCallback = callback;
  }
}
