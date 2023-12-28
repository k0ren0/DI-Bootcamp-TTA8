// function areAnagrams(str1, str2) {
//     // Убираем пробелы и приводим к нижнему регистру для учета регистра символов
//     const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
//     const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

//     // Сортируем символы и объединяем их в строку
//     const sortedStr1 = cleanStr1.split('').sort().join('');
//     const sortedStr2 = cleanStr2.split('').sort().join('');

//     // Проверяем, равны ли отсортированные строки
//     return sortedStr1 === sortedStr2;
// }

// // Пример использования:
// const result1 = areAnagrams("Astronomer", "Moon starer");
// console.log(result1); // Вывод: true

// const result2 = areAnagrams("School master", "The classroom");
// console.log(result2); // Вывод: true

// const result3 = areAnagrams("The Morse Code", "Here come dots");
// console.log(result3); // Вывод: true

// const result4 = areAnagrams("Hello", "World");
// console.log(result4); // Вывод: false
// Функция areAnagrams: Эта функция принимает две строки в качестве параметров.

// Очистка строк от пробелов и приведение к нижнему регистру:

// cleanStr1 и cleanStr2 - это строки, из которых удалены пробелы (\s/g - регулярное выражение для поиска всех пробельных символов) и приведены к нижнему регистру с помощью toLowerCase().
// Сортировка символов:

// sortedStr1 и sortedStr2 - это строки, в которых символы отсортированы. Это достигается путем преобразования строки в массив символов (split('')), сортировки массива символов (sort()), а затем объединения отсортированных символов обратно в строку (join('')).
// Сравнение отсортированных строк:

// return sortedStr1 === sortedStr2; - Функция возвращает true, если отсортированные строки равны, и false в противном случае.
// Примеры использования:

// areAnagrams("Astronomer", "Moon starer"); - Вывод: true, потому что символы в обеих строках могут быть переупорядочены, чтобы получить друг друга.
// areAnagrams("Hello", "World"); - Вывод: false, потому что символы в этих строках не могут быть переупорядочены так, чтобы получить друг друга.