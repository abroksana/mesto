/* Класс UserInfo отвечает за управление отображением информации о пользователе на странице */
export class UserInfo {
/* Принимает в конструктор объект с селекторами двух элементов: */
/* элемент имени пользователя profileName и элемент информации о себе profileActivity */
  constructor({profileName, profileActivity}) {
    this._profileName = profileName;
    this._profileActivity = profileActivity;
  }

/* публичный метод getUserInfo, который возвращает объект с данными пользователя */
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      activity: this._profileActivity.textContent
    }
  }

/* публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу */
  setUserInfo({name, activity}) {
    this._profileName.textContent = name;
    this._profileActivity.textContent = activity;
    // this._popupPrflFrmName.textContent = name;
    // this._popupPrflFrmActiv.textContent = activity;

  }
}

// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится
// когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
