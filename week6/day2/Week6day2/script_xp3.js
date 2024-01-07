// Шаг 1: Объявите глобальную переменную с именем allBoldItems
let allBoldItems;

// Шаг 2: Создайте функцию с именем getBoldItems
function getBoldItems() {
  // Шаг 3: Получите элемент параграфа
  const paragraph = document.querySelector('p');

  // Шаг 4: Получите все элементы жирного текста внутри параграфа
  const boldElements = paragraph.querySelectorAll('strong');

  // Шаг 5: Преобразуйте текст каждого элемента жирного текста в массив
  const boldTexts = Array.from(boldElements).map(element => element.textContent);

  // Шаг 6: Присвойте массив текстов жирного текста глобальной переменной allBoldItems
  allBoldItems = boldTexts;
}

// Шаг 7: Создайте функцию highlight
function highlight() {
  // Шаг 8: Получите все жирные элементы
  const boldElements = document.querySelectorAll('strong');

  // Шаг 9: Измените цвет текста всех жирных элементов на синий
  boldElements.forEach(element => {
    element.style.color = 'blue';
  });
}

// Шаг 10: Создайте функцию returnItemsToDefault
function returnItemsToDefault() {
  // Шаг 11: Получите все жирные элементы
  const boldElements = document.querySelectorAll('strong');

  // Шаг 12: Измените цвет текста всех жирных элементов на черный
  boldElements.forEach(element => {
    element.style.color = 'black';
  });
}

// Шаг 13: Вызовите функцию getBoldItems
getBoldItems();

// Шаг 14: Выведите результат в консоль
console.log(allBoldItems);

// Шаг 15: Добавьте событие mouseover для вызова функции highlight
const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);

// Шаг 16: Добавьте событие mouseout для вызова функции returnItemsToDefault
paragraph.addEventListener('mouseout', returnItemsToDefault);


// Итак, давайте разберем каждый шаг более подробно:

// 1. getBoldItems функция:
// document.querySelector('p') - Получаем ссылку на элемент параграфа в DOM.
// paragraph.querySelectorAll('strong') - Получаем все элементы <strong> внутри параграфа.
// Array.from(boldElements).map(element => element.textContent) - Преобразуем NodeList в массив и извлекаем текст из каждого элемента <strong>.
// allBoldItems = boldTexts - Присваиваем массив текстов переменной allBoldItems.
// 2. highlight функция:
// document.querySelectorAll('strong') - Получаем все элементы <strong> внутри параграфа.
// boldElements.forEach(element => element.style.color = 'blue') - Изменяем цвет текста всех жирных элементов на синий.
// 3. returnItemsToDefault функция:
// document.querySelectorAll('strong') - Получаем все элементы <strong> внутри параграфа.
// boldElements.forEach(element => element.style.color = 'black') - Изменяем цвет текста всех жирных элементов на черный.
// 4. События mouseover и mouseout:
// paragraph.addEventListener('mouseover', highlight) - Добавляем слушатель события mouseover (наведение мыши на параграф), который вызывает функцию highlight.
// paragraph.addEventListener('mouseout', returnItemsToDefault) - Добавляем слушатель события mouseout (вывод мыши из параграфа), который вызывает функцию returnItemsToDefault.
// 5. console.log(allBoldItems):
// Выводит массив текстов жирных элементов в консоль браузера при загрузке страницы.
// Таким образом, код выполняет следующие шаги: при загрузке страницы получает тексты всех жирных элементов и сохраняет их в переменной allBoldItems. При наведении мыши на параграф тексты становятся синими, а при выводе мыши из параграфа возвращаются к черному цвету.