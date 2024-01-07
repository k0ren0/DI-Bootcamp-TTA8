// script.js

// Шаг 1: Функция, вызываемая каждые 2 секунды
function addParagraph() {
    // Шаг 2: Создаем новый элемент параграфа
    const newParagraph = document.createElement("p");

    // Шаг 3: Задаем текст параграфа
    newParagraph.textContent = "Привет, мир";

    // Шаг 4: Находим контейнер по его идентификатору
    const container = document.getElementById("container");

    // Шаг 5: Добавляем новый параграф в контейнер
    container.appendChild(newParagraph);

    // Шаг 6: Проверяем, есть ли в контейнере 5 параграфов
    if (container.children.length === 5) {
        // Шаг 7: Останавливаем интервал, если есть 5 параграфов
        clearInterval(intervalId);
    }
}

// Шаг 8: Устанавливаем интервал для вызова функции каждые 2 секунды
const intervalId = setInterval(addParagraph, 2000);

// Шаг 9: Находим кнопку по идентификатору
const button = document.getElementById("clearIntervalButton");

// Шаг 10: Добавляем слушатель события клика на кнопку
button.addEventListener("click", function () {
    // Шаг 11: Останавливаем интервал при клике на кнопку
    clearInterval(intervalId);
});

// Объяснение шагов:

// HTML Структура:

// Есть контейнер (<div id="container"></div), куда будут добавляться параграфы.
// Есть кнопка (<button id="clearIntervalButton">Остановить интервал</button>), которая, при нажатии, остановит интервал.
// JavaScript Шаги:

// Определяем функцию addParagraph, которая будет вызываться каждые 2 секунды.
// Внутри addParagraph:
// Создаем новый элемент параграфа.
// Задаем текст параграфа "Привет, мир".
// Находим контейнер по его идентификатору.
// Добавляем новый параграф в контейнер.
// Проверяем, есть ли в контейнере 5 параграфов; если да, останавливаем интервал.
// Устанавливаем интервал для вызова addParagraph каждые 2 секунды (setInterval).
// Находим кнопку по идентификатору.
// Добавляем слушатель события клика на кнопку. При клике останавливаем интервал (clearInterval(intervalId)).