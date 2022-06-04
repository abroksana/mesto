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
  profileAvatar
} from '../utils/constants.js';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';

import {Popup} from '../components/Popup.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithConfirm} from '../components/PopupWithConfirm.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';

  /* профиль юзера */
// const userProfile = new UserInfo({profileName, profileActivity});
const userProfile = new UserInfo({
  profileName,
  profileActivity,
  profileAvatar
});
/* profileName - '.profile__title' - имя */
/* profileActivity - '.profile__description' - о себе */
/* profileAvatar - '.profile__image' - аватар */

const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-42/cards',
  token: {
    authorization: 'd94e7cf1-3761-45b6-9798-0ad1da8f2858',
    'Content-Type': 'application/json',
  }
});

/* текущий пользователь */
let actualUserId;

Promise.all([
  api.getCards(),
  api.getUser()
]).then(([cards, profile]) => {
  actualUserId = profile._id;
  cardsList.renderItems(cards); /* рендер карточки пользователя */
  userProfile.setUserInfo(profile); /* загрузка данных пользователя */
}).catch(err => {
  console.log(`Error: ${err}`);
})

  /* Создать и вернуть карточку */
const createCard = (item) => {
  const card = new Card(
    item,
    actualUserId,
    '#card-template',
    {
      handleCardClick: () => {
        openImagePopup.open(item.name, item.link);
      },
  actionDeleteCardClick: (card) => {
    popupDeleteCard.open(); /* еще не реализовано */
    popupDeleteCard.setSubmitCallback(() => {
      api.deleteCard(card.cardId()) /* deleteCard и cardId еще не найдено */
        .then(() => {
          card.deleteCard();
          popupDeleteCard.close();
        })
        .catch(err => {
          console.log(`Ошибка при удалении карточки: ${err}`)
        })
    });
  },
    /* лайк карточки */
    handleLikeClick: (card) => {
      if (card.whenLiked()) {
        api.removelike(card.cardId())
        .then((data) => {
          card.discoverLikesInfo(data.likes);
        })
        .catch(err => {
          console.log(`Ошибка при удалении лайка: ${err}`)
        });
      } else {
        api.addLike(card.cardId())
          .then((data) => {
            card.discoverLikesInfo(data.likes);
        })
        .catch(err => {
          console.log(`Ошибка лайка: ${err}`)
        });
      }
    }
    });
    return card.renderCard();
  };

/* вставка карточек в разметку */
const cardsList = new Section({
  // items: initialCards,
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
}, validationConfig.cardListSelector);

/* попап удаления карточки */
const popupDeleteCard = new PopupWithConfirm('popup_type_delete'); /* реализовать в html */
popupDeleteCard.setEventListeners();

/* новый экземпляр класса PopupWithImage */
const openImagePopup = new PopupWithImage(validationConfig.popupImageSelector);
openImagePopup.setEventListeners(); // Передаём слушатели событий
// cardsList.renderItems();

/* попап профиля пользователя */
const popupAddCardForm = new PopupWithForm({
  popupSelector: '.popup_form-card',
  processFormSubmission: (item) => {
    // cardsList.prependItem(createCard(item));
  popupAddCardForm.loading(true);
  api.addNewCard(item)
    .then(result => {
      cardsList.prependItem(createCard(result));
      popupAddCardForm.close();
    })
    .catch(err => {
      console.log(`Ошибка при добавления карточки: ${err}`)
    })
    .finally(() => {
      popupAddCardForm.loading(false);
    })
  }
})

popupAddCardForm.setEventListeners();

/* попап профиля пользователя */
const popupProfileForm = new PopupWithForm({
  popupSelector: '.popup_form-user',
  processFormSubmission: (item) => {
    popupProfileForm.loading(true);
    api.changeUserAvatar(item)
      .then(result => {
    userProfile.setUserInfo(result);
    popupProfileForm.close();
    })
      .catch(err => {
        console.log(`Ошибка в профиле пользователя: ${err}`);
      })
      .finally(() => {
        popupProfileForm.loading(false);
      })
  }
});
popupProfileForm.setEventListeners();

/* попап аватара */

  /* валидация форм */
const addCardFormValidation = new FormValidator(validationConfig, formAddCard);
const profileFormValidation = new FormValidator(validationConfig, profileForm);
addCardFormValidation.enableValidation();
profileFormValidation.enableValidation();

/* открытие редактирования профиля */
profileEditBtn.addEventListener('click', () => {
  const profile = userProfile.getUserInfo();
  popupPrflFrmName.value = profile.name;
  popupPrflFrmActiv.value = profile.activity;
  profileFormValidation.resetValidation();
  popupProfileForm.open();
});

/* попап добавления карточки */
btnAddNewCard.addEventListener('click', () => {
  addCardFormValidation.toggleButtonState();
  addCardFormValidation.resetValidation();
  popupAddCardForm.open();
});

/* кнопка смены аватара */
