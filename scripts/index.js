const profileEditBtn  = document.querySelector('.profile__edit-button');
const profileEditName = document.querySelector('.profile__user-name');
const profileEditJob = document.querySelector('.profile__user-job')

const popupPrflFrm = document.querySelector('.popup_form-user');
const popupPrflFrmName = popupPrflFrm.querySelector('.popup__input_type_name');
const popupPrflFrmActiv = popupPrflFrm.querySelector('.popup__input_type_activity');
const popupPrflFrmClose = popupPrflFrm.querySelector('body .popup__close-button');
const profileForm = popupPrflFrm.querySelector('.popup__container');

const btnAddNewCard = document.querySelector('.profile__add-button');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupCardAdd = document.querySelector('.popup_form-card');
const popupCardAddName = popupCardAdd.querySelector('.popup__input_type_title');
const popupCardAddLink = popupCardAdd.querySelector('.popup__input_type_link');
const popupCardAddClose = popupCardAdd.querySelector('body .popup__close-button');
const formAddCard = popupCardAdd.querySelector('.popup__container');

const popupView = document.querySelector('.popup_view-image');
const popupViewClose = popupView.querySelector('.popup__close-button');
const popupViewImage = popupView.querySelector('.popup__image');
const popupViewDesc = popupView.querySelector('.popup__description');

const elementList = document.querySelector('.elements__list');
const popups = document.querySelectorAll('.popup');
const popupAddForm = popupPrflFrm.querySelector('[name="user"]');
const buttonElement = popupAddForm.querySelector('.popup__submit-button');

  /* Создать карточку */
function createCard(cardImage, cardName) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardElementImage = cardElement.querySelector('.element__image');

  cardElementImage.src = cardImage;
  cardElementImage.alt = cardName;
  cardElement.querySelector('.element__title').textContent = cardName;

  /* Лайк */
  cardElement.querySelector('.element__like-button').addEventListener('click', function(event) {
    event.target.classList.toggle('element__like-button_active');
  })

  /* Удаление */
  cardElement.querySelector('.element__btn-trash').addEventListener('click', function(event) {
    event.target.closest('.element').remove();
  })

  /* Открытие карточки в окне */
  cardElement.querySelector('.element__image').addEventListener('click', function() {
    popupViewImage.src = cardImage;
    popupViewImage.alt = cardName;
    popupViewDesc.textContent = cardName;
    openPopup(popupView);
  })
  return cardElement;
}

/* Перебор массива с карточками */
function renderInitialCards(initialCards) {
  initialCards.forEach((item) => {
    elementList.append(createCard(item.link, item.name));
  })
};

profileEditBtn.addEventListener('click', function() {
  popupPrflFrmName.value = profileEditName.textContent;
  popupPrflFrmActiv.value = profileEditJob.textContent;
  enableButton(buttonElement, validationConfig);
  openPopup(popupPrflFrm);
});

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {сlosePopup(popup);}
  })
});

    /*  закрытие попапов на Escape */
const handleEscPress = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    сlosePopup(popup);
  }
}

    /*  закрытие попапов по нажатии кнопку мыши на оверлей */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener(`keydown`, handleEscPress);
}
function сlosePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener(`keydown`, handleEscPress);
}

    /*  profile__add-button */
btnAddNewCard.addEventListener('click', () => openPopup(popupCardAdd));
    /* profile__add-button Закрываем попап */
popupPrflFrmClose.addEventListener('click', () => сlosePopup(popupPrflFrm));

    /* popup__close-button */
popupCardAddClose.addEventListener('click', () =>  сlosePopup(popupCardAdd));

    /* popup_view-image */
popupViewClose.addEventListener('click', () => сlosePopup(popupView));

/* Функция формы для изменения профиля  */
function handleSubmitForm (event) {
  event.preventDefault();
  profileEditName.textContent = popupPrflFrmName.value;
  profileEditJob.textContent = popupPrflFrmActiv.value;

  profileForm.reset();
  сlosePopup(popupPrflFrm);
}

profileForm.addEventListener('submit', handleSubmitForm);

formAddCard.addEventListener('submit',(evt) => {
  evt.preventDefault();
  elementList.prepend(createCard(popupCardAddLink.value, popupCardAddName.value));
  formAddCard.reset();
  disableButton(evt.currentTarget.querySelector('.popup__submit-button'), validationConfig);
  сlosePopup(popupCardAdd);
});

/* Функция добавления карточек из массива */
renderInitialCards(initialCards);
