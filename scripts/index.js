let popupElement = document.querySelector('.popup');
let profileEditBtn  = document.querySelector('.profile__edit-button');
let closeButton = popupElement.querySelector('body .popup__close-button');
let formElement = document.querySelector('.popup__container');
//Находим каждый инпут
let nameInput = formElement.querySelector('.popup__input_type_name');
let professionInput = formElement.querySelector('.popup__input_type_activity');
//Находим каждый элемент с изменяемым текстом
let Name = document.querySelector('.profile__user-name');
let Profession = document.querySelector('.profile__user-job')

function formSubmitHandler (evt) {
  evt.preventDefault();
  Name.textContent = nameInput.value;
  Profession.textContent = professionInput.value;
  popupClose();
}

closeButton.addEventListener('click', popupClose);
profileEditBtn.addEventListener('click', popupOpened);
formElement.addEventListener('submit', formSubmitHandler);

/* Открытие попапа */
function popupOpened() {
  popupElement.classList.add('popup_opened');
  nameInput.value = Name.textContent;
  professionInput.value = Profession.textContent
}

/* Закрытие попапа */
function popupClose() {
  popupElement.classList.remove('popup_opened');
}
