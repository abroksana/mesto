class Card {
  constructor(data, actualUserId, cardSelector, {handleCardClick, actionDeleteCardClick, handleLikeClick}) {
    this._name = data.name; /* название карточки */
    this._link = data.link; /* ссылка на изображение */
    this._cardSelector = cardSelector; /* селектор карточки */
    this._likes = data.likes ?? []; /* лайки карточек, при их отсутствии применять правую часть*/
    this._cardId = data._id; /* id карточки */
    this._ownerId = data.owner._id;
    this._actualUserId = actualUserId; /* актуальный пользователь */
    this._alt = data.name; /* альт карточки */
    this._handleCardClick = handleCardClick; /* открытие попапа карточки */
    this._actionDeleteCardClick = actionDeleteCardClick; /* удаление карточки */
    this._handleLikeClick = handleLikeClick; /* лайк карточки */
    this._element = this._getTemplate(); /* запись разметки в поле _element */
    this._elementImage = this._element.querySelector('.element__image'); /* картинка по селектору */
    this._placeButtonLike = this._element.querySelector('.element__like-button'); /* кнопка лайка по селектору */
    this._deleteCardButton = this._element.querySelector('.element__btn-trash'); /* кнопка удаления карточки */
    this._likeCounter = this._element.querySelector('.element__like-counter'); /* счетчик лайков */
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
    this._elementImage.src = this._link; /* изображение */
    this._elementImage.alt = this._alt;
    this._element.querySelector('.element__title').textContent = this._name;
    this._setEventListeners(); /* добавляется обработчик */
    this._iconCardDeleteIsDisplayed(); /* кнопка удаления */
    this.upgradeLikes(); /* количество лайков */

    return this._element;
  };

    /* Слушатели событий */
  _setEventListeners() {
     /* удаление карточки */
    this._deleteCardButton.addEventListener('click', () => {
      this._actionDeleteCardClick(this);
    });

    this._placeButtonLike.addEventListener('click', () => {
			this._handleLikeClick(this);
		}); /* лайк карточки */

    this._elementImage.addEventListener('click', () => {
      this._openPopupWithImage();
    }); /* открытие попапа карточки _likeClickHandler*/
  };

  /* проверка лайков */
  whenLiked() {
    return this._likes.some((like) => like._id === this._actualUserId);
  }

  /* обновление лайков */
  upgradeLikes() {
    this._likeCounter.textContent = this._likes.length;
    if (this.whenLiked()) {
      this._placeButtonLike.classList.add('element__like-button_active');
    } else {
        this._placeButtonLike.classList.remove('element__like-button_active');
    }
  }

  /* метод установки лайков */
  discoverLikesInfo(likes) {
    this._likes = likes;
    this.upgradeLikes();
  }

  /* открытие попапа с карточкой */
  _openPopupWithImage() {
    this._handleCardClick(
      this._name,
      this._link,
    )
  }

    /* если карточка моя, показ кнопки удаления element__btn-trash_visible */
  _iconCardDeleteIsDisplayed() {
    if (this._ownerId === this._actualUserId) {
      this._deleteCardButton.classList.add('element__btn-trash_visible');
    } else {
      this._deleteCardButton.classList.remove('element__btn-trash_visible');
    }
  }

  /* Удаление карточки */
  deleteCard() {
    this._element.remove();
    this._element = null;
  };

  /* id карточки */
  cardId() {
    return this._cardId;
  }
};

export {Card};
