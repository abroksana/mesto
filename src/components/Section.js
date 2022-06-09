export class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer; /* это функция, которая отвечает за создание и отрисовку данных на странице */
    this._container = document.querySelector(containerSelector); /* селектор контейнера, в который нужно добавлять созданные элементы */
  }

/* селектор контейнера, в который нужно добавлять созданные элементы */
/* Отрисовка каждого отдельного элемента осуществляется функцией renderer */
  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

/* публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер */
  addItem(cardElement) {
    this._container.append(cardElement);
  }

/* Добавить карточку на страницу */
  prependItem(cardElement) {
  this._container.prepend(cardElement);
  };
}
