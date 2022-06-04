  /* карточки с сервера */
  /* профиль с сервера */
  /* редактирование профиля */
  /* добавление карточки */
  /* удаление карточки */

// import HtmlWebpackPlugin from "html-webpack-plugin";

export class Api {
  constructor({address, token}) {
    this._address = address;
    this._token = token;
  }
  /* проверка ошибок */
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }
  /* карточки с сервера */
  getCards() {
    return fetch(`${this._address}/cards`, {
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse)
  }
  /* профиль с сервера */
  getUser() {
    return fetch(`${this._address}/user/me`, {
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }
  /* редактирование профиля */
  editProfile(item) {
    return fetch(`${this._address}/user/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: item.name,
        about: item.description
      })
    })
    .then(this._checkResponse)
  }
  /* добавление карточки */
  addNewCard(data) {
    return fetch(`${this._address}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._checkResponse)
  }
  /* удаление карточки */
  deleteCard(id) {
    return fetch(`${this._address}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }
  /* добавление like */
  addLike(id) {
    return fetch(`${this._address}/cards/likes${id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }
  /* удаление like */
  removelike(id) {
    return fetch(`${this._address}/cards/likes${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }
  /* смена аватара */
  changeUserAvatar(item) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
				avatar: item.avatar
      })
    })
    .then(this._checkResponse)
  }
}
