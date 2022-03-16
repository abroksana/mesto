const popupElement = document.querySelector('.popup');
const profileEditBtn  = document.querySelector('.profile__edit-button');
const closeButton = popupElement.querySelector('body .popup__close-button');
/*
const profileUserName = document.querySelector('.profile__user-name');
const profileUserDescription = document.querySelector('.profile__user-description');
const popupProfileNameInput = popupProfile.querySelector('.form__input_type_name');
const popupProfileAboutActivity = popupProfile.querySelector('.form__input_type_activity');
const editPopupContent = document.querySelector('.popup__container'); */
       /*profileForm*/

/* Функция формы для изменения профиля*/
/* 16 марта
function handleProfileEditSubmit(event) {
  event.preventDefault();

  profileUserName.textContent = popupProfileNameInput.value;
  profileUserDescription.textContent = popupProfileAboutActivity.value;

  popupClose(popupProfile);

  editPopupContent.reset();
}

editPopupContent.addEventListener('submit', handleProfileEditSubmit);
*/

// Находим форму в DOM
let formElement = // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleProfileEditSubmit (event) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.Так мы можем определить
												// свою логику отправки. О том, как это делать, расскажем позже.

	// Находим поля формы в DOM
	let nameInput = // Воспользуйтесь инструментом .querySelector()
	let jobInput = // Воспользуйтесь инструментом .querySelector()
  const nameEl = document.querySelector('.profile__user-name');
  const jobEl = document.querySelector('.profile__user-job');

	// Получите значение полей из свойства value
  nameEl.textContent = name.value;
  jobEl.textContent = job.value;

	// Выберите элементы, куда должны быть вставлены значения полей

	// Вставьте новые значения с помощью textContent
  profileUserName.textContent = popupProfileNameInput.value;
  profileUserDescription.textContent = popupProfileAboutInput.value;
}

profileForm.addEventListener('submit', handleProfileEditSubmit);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

/*
const popupProfile = document.querySelector('.popup_form_edit-profile');
const profileUserName = document.querySelector('.profile__user-name');
const profileUserDescription = document.querySelector('.profile__user-description');
const popupProfileNameInput = popupProfile.querySelector('.form__input_type_name');
const popupProfileAboutActivity = popupProfile.querySelector('.form__input_type_activity');
const popupProfileSubmitBtn = popupProfile.querySelector('.popup__submit-button');
const popupFieldset = popupProfile.querySelector('.popup__fieldset');*/



/*profileEditBtn.addEventListener('click', function () {
  const currentName = document.querySelector('.form__input_type_name').textContent;
  const currentJob = document.querySelector('.form__input_type_activity').textContent;
  const { name, job } = document.forms.edit.elements;

  name.value = currentName;
  job.value = currentJob;

  popup.open(editPopupContent);
});*/

/*
document.forms.edit.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameEl = document.querySelector('.form__input_type_name');
  const jobEl = document.querySelector('.form__input_type_activity');
  const { name, job } = event.currentTarget.elements;

  nameEl.textContent = name.value;
  jobEl.textContent = job.value;

  event.currentTarget.reset();
  popupclose();
});
*/
function openPopup() {
  popupElement.classList.add('popup_opened');
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

profileEditBtn.addEventListener('click', (event) => {
  openPopup()
});

closeButton.addEventListener('click', closePopup)


/* Функция формы для изменения профиля*/
/*
function handleProfileEditSubmit(event) {
  event.preventDefault();

  profileUserName.textContent = popupProfileNameInput.value;
  profileUserDescription.textContent = popupProfileAboutActivity.value;

  popupClose(popupProfile);

  popupFieldset.reset();
}

popupFieldset.addEventListener('submit', handleProfileEditSubmit); */
