const apiKey = '4001e483fcfbe53a43371209';
const baseUrl = 'https://v6.exchangerate-api.com/v6';

async function fetchSupportedCurrencies() {
  try {
    const currenciesResponse = await fetch(`${baseUrl}/${apiKey}/latest/USD`);
    const currenciesData = await currenciesResponse.json();

    if (currenciesData.result === 'success') {
      return Object.keys(currenciesData.conversion_rates);
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

    if (response.ok && data.result === 'success') {
      const resultElement = document.getElementById('result');

      if (data.conversion_rate) {
        const convertedAmount = amount * data.conversion_rate;
        resultElement.innerHTML = `Converted ${amount} ${fromCurrency} to ${toCurrency}: ${convertedAmount.toFixed(2)} ${toCurrency}`;
      } else {
        console.error('Conversion rate not available in the response:', data);
        throw new Error('Conversion rate not available.');
      }
    } else {
      console.error('Unexpected API response:', data);
      throw new Error('Conversion failed. Unexpected API response.');
    }
  } catch (error) {
    console.error('Error:', error.message);
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Conversion failed. Please check your inputs and try again.';
  }
}

async function populateCurrencyDropdowns() {
    try {
      await fetchCurrencyNames(); // Fetch currency names first
      const currencies = await fetchSupportedCurrencies();
      const fromCurrencyDropdown = document.getElementById('fromCurrency');
      const toCurrencyDropdown = document.getElementById('toCurrency');
  
      console.log('Fetched Currency Names:', currencyNames);
      console.log('Fetched Supported Currencies:', currencies);
  
      if (Array.isArray(currencies) && currencies.length > 0) {
        currencies.forEach(currency => {
          const option = document.createElement('option');
          option.value = currency;
          option.text = `${currency} - ${currencyNames[currency] || 'Unknown Currency'}`;
          fromCurrencyDropdown.add(option);
        });
  
        currencies.forEach(currency => {
          const option = document.createElement('option');
          option.value = currency;
          option.text = `${currency} - ${currencyNames[currency] || 'Unknown Currency'}`;
          toCurrencyDropdown.add(option);
        });
      } else {
        console.error('No supported currencies found.');
        throw new Error('No supported currencies found.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  

function convert() {
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  convertCurrency(fromCurrency, toCurrency, amount);
}

// Populate currency dropdowns on page load
populateCurrencyDropdowns();
