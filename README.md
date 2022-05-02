# Проект 6: Место
## Основные технологии:
* Подключенный шрифт Inter через *@font-face* и парочку **аварийных
* Активное использование *@media для переходов между размерами экранов.
* Позиционирование и относительные пути.
 * Ссылки *затухают* при наведении на них курсором мыши (использован псевдокласс **:hover**).
* Карточку можно добавить из любого текстового поля, нажав на Enter.
* Сделано так, чтобы карточки можно было лайкать.
* Карточки с картинками можно как добавлять так и удалять.
* Форма не позволит внести изменения если не пройдена проверка на валидность.


------
### Особенности верстки:
1. Для создания *сеток* используется как **flex** так и **grid** или их сочетания.
2. Основной задачей было *адаптировать* проект для просмотра с разных типов устройств. Сайт должен был быть **смотрибельным** при разном разрешении экранов. Важный пунктом стояла задача *плавно растягивать* контент.
3. Использована *файловая* структура **Nested** (стили и картинки в папках, а папки разбиты по блокам по БЭМ).
	* Для корректной работы стилей сайта, выложенного на Гитхабе, использован файл *.nojekyll*.
4. Посредством *JavaScript* реализован **pop-up**.
	* Открытие и закрытие попапа.
	* Редактирование имени и информации о себе.
  * Добавление картинки и ее описания.
  * Настроен просмотр фотографий путем открытия попапа с картинкой.
5. Модальные окна свёрстаны и присутствуют в разметке, а не создаются динамически при помощи JS.
6. Формы ввода от пользователя проходят валидацию.
  * Поля имеют свои настройки валидации.
  * Задействованы стандартные браузерные тексты ошибок.
7. Закрытие попапов реализовано посредством:
  * Кликом на оверлей.
  * Нажатием на клавишу Esc.


### В планах:
* Добавить классы Card и FormValidator в код.
* Второе требование — разбить JavaScript на модули.
------
•	[Ссылка на макет в Figma](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=1140%3A291)

•	[Страница сайта тут](https://abroksana.github.io/mesto/)


#### Следите за изменениями!

Создание классов Card и FormValidator
Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение:
* принимает в конструктор её данные и селектор её template-элемента;
* содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
* содержит приватные методы для каждого обработчика;
* содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.
Для каждой карточки создайте экземпляр класса Card.
Создайте класс FormValidator, который настраивает валидацию полей формы:
* принимает в конструктор объект настроек с селекторами и классами формы;
* принимает вторым параметром элемент той формы, которая валидируется;
* имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки сабмита, устанавливают все обработчики;
* имеет публичный метод enableValidation, который включает валидацию формы.
Для каждой проверяемой формы создайте экземпляр класса FormValidator.
