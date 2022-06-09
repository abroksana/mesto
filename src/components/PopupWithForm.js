import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({popupSelector, processFormSubmission}) {
    super(popupSelector);
    this._processFormSubmission = processFormSubmission;
    this._popupForm = this._popup.querySelector('.popup__container');
    this._inputList = this._popupForm.querySelectorAll('.popup__input');  // _form in 7
  }

/* приватный метод _getInputValues, который собирает данные всех полей формы */
  _getInputValues() {
    this._formFieldValues = {};
    this._inputList.forEach(input => {
      this._formFieldValues[input.name] = input.value;
    });
    return this._formFieldValues;
  }

/* Перезаписывает родительский метод setEventListeners */
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._processFormSubmission(this._getInputValues());
      // this.close();
    });
  }

/* Перезаписывает родительский метод close; при закрытии попапа форма должна ещё и сбрасываться*/
  close() {
    super.close();
    this._popupForm.reset();
  }
}
