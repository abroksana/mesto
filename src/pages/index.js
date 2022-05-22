import './index.css';

import {
  validationConfig,
  initialCards,
  profileEditBtn,
  profileName,
  profileActivity,
  popupPrflFrmName,
  popupPrflFrmActiv,
  profileForm,
  btnAddNewCard,
  formAddCard,
} from '../utils/constants.js';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';

import {Popup} from '../components/Popup.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';

// новый экземпляр класса PopupWithImage
const openImagePopup = new PopupWithImage(validationConfig.popupImageSelector);
openImagePopup.setEventListeners(); // Передаём слушатели событий

  /* Создать и вернуть карточку */
const createCard = (item) => {
  const card = new Card(item.name, item.link, item.alt, '#card-template',
  {
    handleCardClick: () => {
      openImagePopup.open(item.name, item.link);
    }
  });
  return card.renderCard();
};


const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
},

validationConfig.cardListSelector);
cardsList.renderItems();

const userProfile = new UserInfo({profileName, profileActivity});

const popupAddCardForm = new PopupWithForm({
  popupSelector: '.popup_form-card',
  processFormSubmission: (item) => {
    cardsList.prependItem(createCard(item));
  }
})

popupAddCardForm.setEventListeners();

/* попап профиля пользователя */
const popupProfileForm = new PopupWithForm({
  popupSelector: '.popup_form-user',
  processFormSubmission: (item) => {
    userProfile.setUserInfo(item);
    popupProfileForm.close();
  }
})
popupProfileForm.setEventListeners();

  /* валидация форм */
const addCardFormValidation = new FormValidator(validationConfig, formAddCard);
const profileFormValidation = new FormValidator(validationConfig, profileForm);
addCardFormValidation.enableValidation();
profileFormValidation.enableValidation();


profileEditBtn.addEventListener('click', () => {
  const profile = userProfile.getUserInfo();
  popupPrflFrmName.value = profile.name;
  popupPrflFrmActiv.value = profile.activity;
  profileFormValidation.resetValidation();
  popupProfileForm.open();
});

btnAddNewCard.addEventListener('click', () => {
  addCardFormValidation.toggleButtonState();
  addCardFormValidation.resetValidation();
  popupAddCardForm.open();
});
