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
// Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open. В методе open класса PopupWithImage
// нужно вставлять в попап картинку с src изображения и подписью к картинке.
