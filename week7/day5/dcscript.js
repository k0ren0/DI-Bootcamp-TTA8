// API-ключ и базовый URL для валютного сервиса
const apiKey = '4001e483fcfbe53a43371209';
const baseUrl = 'https://v6.exchangerate-api.com/v6';

// Функция для получения списка поддерживаемых валют
async function fetchSupportedCurrencies() {
  try {
    const response = await fetch(`${baseUrl}/${apiKey}/latest/USD`);
    const data = await response.json();

    // Проверка успешности запроса и корректности полученных данных
    if (response.ok && data.result === 'success') {
      // Извлечение и возврат списка кодов валют из ответа
      return Object.keys(data.conversion_rates);
    } else {
      // Вызов ошибки, если запрос неудачен или данные не соответствуют ожиданиям
      throw new Error('Не удалось получить список валют.');
    }
  } catch (error) {
    // Обработка ошибок, возникающих в процессе запроса
    console.error('Ошибка:', error.message);
    return []; // Возвращение пустого массива в случае ошибки
  }
}

// Функция для конвертации валюты и обновления результата на странице
async function convertCurrency(fromCurrency, toCurrency, amount) {
  try {
    // Запрос на конвертацию указанной суммы из одной валюты в другую
    const response = await fetch(`${baseUrl}/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`);
    const data = await response.json();

    // Проверка успешности запроса на конвертацию и корректности данных
    if (response.ok && data.result === 'success' && data.conversion_rate) {
      // Обновление элемента результата на странице сконвертированной суммой
      const resultElement = document.getElementById('result');
      const convertedAmount = (amount * data.conversion_rate).toFixed(2);
      resultElement.innerHTML = `Конвертировано ${amount} ${fromCurrency} в ${toCurrency}: ${convertedAmount} ${toCurrency}`;
    } else {
      // Вызов ошибки, если конвертация не удалась или данные не соответствуют ожиданиям
      console.error('Конвертация не удалась. Неожиданный ответ от API:', data);
      throw new Error('Конвертация не удалась. Неожиданный ответ от API.');
    }
  } catch (error) {
    // Обработка ошибок, возникающих в процессе конвертации
    console.error('Ошибка:', error.message);
    
    // Обновление элемента результата на странице сообщением об ошибке
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Конвертация не удалась. Пожалуйста, проверьте ваши вводные данные и повторите попытку.';
  }
}

// Функция для заполнения выпадающих списков с валютами при загрузке страницы
async function populateCurrencyDropdowns() {
  try {
    // Получение списка поддерживаемых валют
    const currencies = await fetchSupportedCurrencies();

    // Получение ссылок на элементы выпадающих списков в HTML
    const fromCurrencyDropdown = document.getElementById('fromCurrency');
    const toCurrencyDropdown = document.getElementById('toCurrency');

    // Заполнение выпадающих списков опциями валют
    currencies.forEach(currency => {
      const option = new Option(currency, currency);
      fromCurrencyDropdown.add(option);
      toCurrencyDropdown.add(option.cloneNode(true));
    });
  } catch (error) {
    // Обработка ошибок, возникающих при заполнении выпадающих списков с валютами
    console.error('Ошибка:', error.message);
  }
}

// Функция для обработки конвертации валют при активации пользователем
function convert() {
  // Получение выбранных валют и суммы из HTML-элементов
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const amount = parseFloat(document.getElementById('amount').value);

  // Проверка валидности введенной суммы
  if (isNaN(amount) || amount <= 0) {
    alert('Пожалуйста, введите корректную сумму.');
    return;
  }

  // Запуск конвертации валют с использованием выбранных валют и суммы
  convertCurrency(fromCurrency, toCurrency, amount);
}

// Заполнение выпадающих списков с валютами при загрузке страницы
populateCurrencyDropdowns();
