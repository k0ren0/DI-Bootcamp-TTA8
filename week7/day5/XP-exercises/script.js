document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button');
    button.addEventListener('click', getRandomCharacter);
});

function getRandomCharacter() {
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const characterInfo = document.getElementById('character-info');

    loading.style.display = 'block';
    error.style.display = 'none';
    characterInfo.innerHTML = '';
    
    const randomCharacterNumber = Math.floor(Math.random() * 83) + 1;

    fetchData(`https://www.swapi.tech/api/people/${randomCharacterNumber}`)
        .then(data => {
            loading.style.display = 'none';
            displayCharacterInfo(data.result.properties);
        })
        .catch(err => {
            loading.style.display = 'none';
            error.style.display = 'block';
            console.error('Error fetching character data:', err);
        });
}

function fetchData(url) {
    const loading = document.getElementById('loading');
    loading.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok (Status: ${response.status})`);
            }
            return response.json();
        })
        .catch(error => {
            console.error(`Error fetching data: ${error.message}`);
            throw error; // Rethrow the error to propagate it further
        });
}

function displayCharacterInfo(character) {
    const characterInfo = document.getElementById('character-info');
    const infoHTML = `
        <h2>${character.name}</h2>
        <p>Height: ${character.height}</p>
        <p>Gender: ${character.gender}</p>
        <p>Birth Year: ${character.birth_year}</p>
        <p>Home World: ${character.homeworld}</p>
    `;
    characterInfo.innerHTML = infoHTML;
}
