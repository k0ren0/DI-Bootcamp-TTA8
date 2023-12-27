// // Exercise 3 : Transform The Sentence

let allBoldItems;

function getBoldItems() {

  // Получаем все элементы абзаца (предположим, что у вас есть элемент с id "myParagraph")
  const paragraph = document.getElementById("myParagraph");

  // Получаем все жирные элементы внутри абзаца
  const boldItems = paragraph.querySelectorAll("strong, b");

  // Преобразуем NodeList в массив и получаем текст из каждого элемента
  const boldItemsText = Array.from(boldItems).map(item => item.textContent);

  // Присваиваем полученные тексты переменной allBoldItems
  allBoldItems = boldItemsText;
}

// Пример использования
getBoldItems();
console.log(allBoldItems);