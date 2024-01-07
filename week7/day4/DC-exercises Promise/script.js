async function getSunrise() {
  const city1Name = document.getElementById('city1').value;
  const city2Name = document.getElementById('city2').value;

  try {
    const city1Promise = fetchSunrise(48.864716, 2.349014, city1Name); // Paris coordinates
    const city2Promise = fetchSunrise(40.730610, -73.935242, city2Name); // New York coordinates

    Promise.all([city1Promise, city2Promise])
      .then(results => {
        document.getElementById('result').innerHTML = `
          <p>Sunrise in ${city1Name}: ${results[0]}</p>
          <p>Sunrise in ${city2Name}: ${results[1]}</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching sunrise information:', error);
      });
  } catch (error) {
    console.error('Error getting latitude and longitude:', error);
  }
}

function fetchSunrise(latitude, longitude, city) {
  const apiUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`;
  
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const sunrise = data.results.sunrise;
      console.log(`${city} Sunrise:`, sunrise);
      return sunrise;
    })
    .catch(error => {
      console.error(`Error fetching sunrise for ${city}:`, error);
      throw error;
    });
}