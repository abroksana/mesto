export const validationConfig = {
  cardListSelector: '.elements__list',
  popupImageSelector: '.popup_view-image',
  inputSelector: '.popup__input',
  formSelector: '.popup__container',
  buttonSubmitClass: '.popup__submit-button',
  disableButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  activeErrorClass: 'popup__input-error_active',
};


export const profileName = document.querySelector('.profile__user-name');
export const profileActivity = document.querySelector('.profile__user-job');
export const profileAvatar = document.querySelector('.profile__image'); // аватар профиля
export const popupAvatarButton = document.querySelector('.profile__avatar');

export const btnAddNewCard = document.querySelector('.profile__add-button');
export const profileEditBtn  = document.querySelector('.profile__edit-button');

export const popupPrflFrm = document.querySelector('.popup_form-user'); /* попап профиля */
export const popupCardAdd = document.querySelector('.popup_form-card'); /* попап добавления карточки */
export const popupAvatar = document.querySelector('.popup_type_avatar'); /* попап аватара */

export const popupPrflFrmName = popupPrflFrm.querySelector('.popup__input_type_name');
export const popupPrflFrmActiv = popupPrflFrm.querySelector('.popup__input_type_activity');

export const popupView = document.querySelector('.popup_view-image');

export const formAddCard = popupCardAdd.querySelector('.popup__container');
export const profileForm = popupPrflFrm.querySelector('.popup__container');
export const editAvatarForm = popupAvatar.querySelector('.popup__container');
