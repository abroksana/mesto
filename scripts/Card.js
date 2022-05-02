import { handleImageClick } from './index.js';

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  };

    /* Возврат шаблона карточки из DOM */
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  };

  /* Удаление карточки из DOM */
  _deleteClickHandler = () => {
    this._element.remove();
  };

    /* Удаление и удаление на кнопке лайк */
  _likeClickHandler = () => {
    this._placeButtonLike.classList.toggle('element__like-button_active');
  };

    /* Слушатели событий */
  _setEventListeners = () => {
    this._placeButtonLike.addEventListener('click', this._likeClickHandler);
    this._placeButtonTrash.addEventListener('click', this._deleteClickHandler);
    this._elementImage.addEventListener('click', () => {
      handleImageClick(this._name, this._link)
    });
  };

    /* Генерируется и возвращает карточку  */
  generateCard = () => {
    this._element = this._getTemplate();
    this._placeButtonLike = this._element.querySelector('.element__like-button');
    this._placeButtonTrash = this._element.querySelector('.element__btn-trash');
    this._elementTitle = this._element.querySelector('.element__title');
    this._elementImage = this._element.querySelector('.element__image');
    this._setEventListeners();

    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = 'Фотография местности ' + this._name;
    return this._element;
  };
};
