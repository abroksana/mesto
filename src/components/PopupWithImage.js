/* класс PopupWithImage, который наследует от Popup */
import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popupViewImage = this._popup.querySelector('.popup__image');
    this.popupViewDesc = this._popup.querySelector('.popup__description');
  }

  open(name, link) {
    this.popupViewImage.src = link;
    this.popupViewImage.alt = name;
    this.popupViewDesc.textContent = name;
    super.open();
  }
}
