const apiKey = '4001e483fcfbe53a43371209';
const baseUrl = 'https://v6.exchangerate-api.com/v6';

async function fetchCurrency() {
  try {
    const response = await fetch(`${baseUrl}/${apiKey}/latest/USD`);
    const data = await response.json();

    if (response.ok && data.result === 'success') {
      const Currencies = Object.keys(data.conversion_rates);
      if (!Currencies.includes('USD')) Currencies.push('USD');
      if (!Currencies.includes('ILS')) Currencies.push('ILS');
      return Currencies;
    } else {
      throw new Error('Failed to fetch currencies.');
    }
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}

async function convertCurrency(fromCurrency, toCurrency, amount) {
  try {
    const response = await fetch(`${baseUrl}/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`);
    const data = await response.json();

    if (response.ok && data.result === 'success' && data.conversion_rate) {
      const resultElement = document.getElementById('result');
      const convertedAmount = Number(amount) * data.conversion_rate;
      resultElement.innerHTML = `Converted ${amount} ${fromCurrency} to ${toCurrency}: ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
      console.error('Failed. Unexpected API response:', data);
      throw new Error('Failed. Unexpected API response.');
    }
  } catch (error) {
    console.error('Error:', error.message);
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Failed. Check your inputs and try again.';
  }
}

async function currencyDrop() {
  try {
    const currencies = await fetchCurrency();
    const [fromCurrencyDropdown, toCurrencyDropdown] = [document.getElementById('fromCurrency'), document.getElementById('toCurrency')];

    currencies.forEach(currency => {
      const option = new Option(currency, currency);
      fromCurrencyDropdown.add(option);
      toCurrencyDropdown.add(option.cloneNode(true));
    });

    [fromCurrencyDropdown.value, toCurrencyDropdown.value] = ['USD', 'ILS'];
  } catch (error) {
    console.error('Error:', error.message);
  }
}

function convert() {
  const [fromCurrency, toCurrency, amount] = [document.getElementById('fromCurrency').value, document.getElementById('toCurrency').value, document.getElementById('amount').value];

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  convertCurrency(fromCurrency, toCurrency, amount);
}

currencyDrop();
