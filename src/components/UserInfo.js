/* Класс UserInfo отвечает за управление отображением информации о пользователе на странице */
export class UserInfo {
/* Принимает в конструктор объект с селекторами двух элементов: */
/* элемент имени пользователя profileName и элемент информации о себе profileActivity */
  constructor({profileName, profileActivity, profileAvatar}) {
    this._profileName = profileName;
    this._profileActivity = profileActivity;
    this._profileAvatar = profileAvatar;
  }

/* публичный метод getUserInfo, который возвращает объект с данными пользователя */
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileActivity.textContent,
    }
  }

/* публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу */
  setUserInfo(item) {
    this._profileName.textContent = item.name;
    this._profileActivity.textContent = item.about;
    this._profileAvatar.src = item.avatar;
    // this._popupPrflFrmName.textContent = name;
    // this._popupPrflFrmActiv.textContent = activity;

  }
}
