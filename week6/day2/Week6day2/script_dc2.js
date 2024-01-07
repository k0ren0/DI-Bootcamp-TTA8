
// Конечно, давайте подробнее разберем JavaScript-код по блокам.

// 1. Получение формы и добавление слушателя событий

// document.getElementById("libform").addEventListener("submit", function(event) {
//     event.preventDefault();
//     // ...
// });
// document.getElementById("libform"): Эта строка используется для получения элемента формы с идентификатором "libform" с использованием метода getElementById.

// .addEventListener("submit", function(event) {: Метод addEventListener используется для добавления слушателя событий. В данном случае, мы слушаем событие "submit" формы. Когда форма отправляется, вызывается анонимная функция, принимающая объект события event.

// event.preventDefault();: Этот метод предотвращает стандартное поведение формы, а именно, предотвращает её автоматическую перезагрузку при отправке.

// 2. Получение значений полей формы

// let noun = document.getElementById("noun").value;
// let adjective = document.getElementById("adjective").value;
// let person = document.getElementById("person").value;
// let verb = document.getElementById("verb").value;
// let place = document.getElementById("place").value;
// Здесь мы используем метод getElementById для каждого поля формы и получаем их значения с помощью свойства value.

// 3. Проверка наличия значений в полях

// if (noun !== "" && adjective !== "" && person !== "" && verb !== "" && place !== "") {
//     // ...
// } else {
//     console.error("Пожалуйста, заполните все поля!");
// }
// Мы используем условное выражение if для проверки того, что все переменные (значения полей) не пусты.

// console.error("Пожалуйста, заполните все поля!");: Если хотя бы одно из полей не заполнено, выводим сообщение об ошибке в консоль с помощью console.error.

// 4. Генерация и отображение истории

// const story = `${person} пошел в ${place} и ${verb} с ${adjective} ${noun}.`;
// document.getElementById("story").innerText = story;
// Создаем строку истории, используя строки-шаблоны (template literals) для более удобной конкатенации строк и вставки значений переменных.

// document.getElementById("story").innerText = story;: Устанавливаем сгенерированную историю внутрь элемента с идентификатором "story".

// Этот код создает интерактивную форму Mad Libs, где пользователь вводит различные слова, и программа генерирует забавную историю на основе этих слов.