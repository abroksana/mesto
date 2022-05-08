import Card from './Card.js';
import FormValidator from './FormValidator.js';

const profileEditBtn  = document.querySelector('.profile__edit-button');
const profileEditName = document.querySelector('.profile__user-name');
const profileEditJob = document.querySelector('.profile__user-job')

const popupPrflFrm = document.querySelector('.popup_form-user');
const popupPrflFrmName = popupPrflFrm.querySelector('.popup__input_type_name');
const popupPrflFrmActiv = popupPrflFrm.querySelector('.popup__input_type_activity');
const profileForm = popupPrflFrm.querySelector('.popup__container');

const btnAddNewCard = document.querySelector('.profile__add-button');

const initialCards = [
  {
    name: 'Пространство',
    link: 'https://cdn.pixabay.com/photo/2021/08/14/03/55/galaxy-6544509_960_720.jpg'
  },
  {
    name: 'Галактика',
    link: 'https://cdn.pixabay.com/photo/2017/04/22/00/14/universe-2250310_960_720.jpg'
  },
  {
    name: 'Планеты фантазия',
    link: 'https://cdn.pixabay.com/photo/2018/03/04/23/09/astronomy-3199541_960_720.jpg'
  },
  {
    name: 'Большой взрыв',
    link: 'https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188_960_720.jpg'
  },
  {
    name: 'Звездная пыль',
    link: 'https://cdn.pixabay.com/photo/2020/11/07/01/28/abstract-5719221_960_720.jpg'
  },
  {
    name: 'Туманность Ориона',
    link: 'https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_960_720.jpg'
  }
];

const popupCardAdd = document.querySelector('.popup_form-card');
const formAddCard = popupCardAdd.querySelector('.popup__container');

const popupView = document.querySelector('.popup_view-image');
const popupViewImage = popupView.querySelector('.popup__image');
const popupViewDesc = popupView.querySelector('.popup__description');

const elementList = document.querySelector('.elements__list');
const popups = document.querySelectorAll('.popup');
const popupFormAdd = document.querySelector('#popup-form-add');
const popupFormEdit = document.querySelector('#popup-form-edit');

const validationConfig = {
  inputSelector: '.popup__input',
  formSelector: '.popup__container',
  buttonSubmitClass: '.popup__submit-button',
  disableButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  activeErrorClass: 'popup__input-error_active',
};

  /*  закрытие попапов на Escape */
const handleEscPress = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};

// Функция клика на фото (открытие попапа)
export function handleImageClick(name, link) {
  popupViewImage.src = link;
  popupViewDesc.textContent = name;
  popupViewImage.alt = name;

  openPopup(popupView);
};

  /*  открытия Popup и закрытие попапов по нажатии кнопку мыши на оверлей */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener(`keydown`, handleEscPress);
};

/*  закрытие попапов */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener(`keydown`, handleEscPress);
};

  /* Создать и вернуть карточку */
function createCard(data) {
  const card = new Card(data,'#card-template');
  const cardElement = card.generateCard();

  return cardElement
};

  /* Добавить карточку на страницу */
function addCard(container,cardElement) {
  container.prepend(cardElement);
};

  /* Перебор масива и отправка */
initialCards.forEach(item => {
  addCard(elementList, createCard(item));
});

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {closePopup(popup);}
  })
});

const popupCardAddName = popupCardAdd.querySelector('.popup__input_type_title'); // инпут названия
const popupCardAddLink = popupCardAdd.querySelector('[name="link-image"]'); // // инпут ссылки / изображения

  /* Отправка формы новой карточки и отслеживание события  */
formAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  elementList.prepend(createCard({
    name: popupCardAddName.value,
    link: popupCardAddLink.value,
    alt: popupCardAddName.value,
  })
  );
  popupCardAddName.value = '';
  popupCardAddLink.value =  '';
  closePopup(popupCardAdd);

  addPupupValidator.disableButton();
});

  /* Функция формы для изменения профиля  */
function handleSubmitForm (event) {
  event.preventDefault();
  profileEditName.textContent = popupPrflFrmName.value;
  profileEditJob.textContent = popupPrflFrmActiv.value;

  closePopup(popupPrflFrm);
  profileForm.reset();
};

profileForm.addEventListener('submit', handleSubmitForm);

  /* Функция формы для изменения профиля и отслеживание события  */
profileEditBtn.addEventListener('click', () => {
  popupPrflFrmName.value = profileEditName.textContent;
  popupPrflFrmActiv.value = profileEditJob.textContent;
  editPupupValidator.enableButton();

  openPopup(popupPrflFrm);
});

  /*  profile__add-button */
btnAddNewCard.addEventListener('click', () => openPopup(popupCardAdd));

  /*  Валидация для формы профиля */
const editPupupValidator = new FormValidator(validationConfig, popupFormEdit);
editPupupValidator.enableValidation();

  /*  Валидация для формы карточки */
const addPupupValidator = new FormValidator(validationConfig, popupFormAdd);
addPupupValidator.enableValidation();
