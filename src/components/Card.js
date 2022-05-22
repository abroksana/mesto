class Card {
  constructor(name, link, alt, cardSelector, {handleCardClick}) {
    this._name = name;
    this._link = link;
    this._alt = alt;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.element__image');
    this._placeButtonLike = this._element.querySelector('.element__like-button');
  };

    /* Возврат шаблона карточки из DOM */
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  };

  renderCard() {
    this._elementImage.src = this._link;
    this._elementImage.alt = this._alt;
    this._element.querySelector('.element__title').textContent = this._name;;
    this._setEventListeners();

    return this._element;
  };

    /* Слушатели событий */
  _setEventListeners() {
    this._element.querySelector('.element__btn-trash').addEventListener('click', () => {
      this._deleteClickHandler();
    })
    this._placeButtonLike.addEventListener('click', this._likeClickHandler);
    this._elementImage.addEventListener('click', () => {
      this._openPopupWithImage();
    });
  };

  /* Удаление карточки из DOM */
  _deleteClickHandler = () => {
    this._element.remove();
  };

    /* Удаление и удаление на кнопке лайк */
  _likeClickHandler = () => {
    this._placeButtonLike.classList.toggle('element__like-button_active');
  };

  _openPopupWithImage() {
    this._handleCardClick(
      this._name,
      this._link,
    )
  }
};

export {Card};

/* Свяжите класс Card c попапом. Сделайте так, чтобы Card
принимал в конструктор функцию handleCardClick. Эта функция
должна открывать попап с картинкой при клике на карточку. */
