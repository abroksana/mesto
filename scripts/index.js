const popupElement = document.querySelector('.popup');
const profileButton = document.querySelector('.profile__edit-button');
const closeButton = popupElement.querySelector('body .popup__close-button');

function openPopup() {
  popupElement.classList.add('popup_opened');

}

function closePopup() {
  popupElement.classList.remove('popup_opened');

}
