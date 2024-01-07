document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button');
    button.addEventListener('click', getRandomCharacter);
});

async function getRandomCharacter() {
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const characterInfo = document.getElementById('character-info');

    loading.style.display = 'block';
    error.style.display = 'none';
    characterInfo.innerHTML = '';

    try {
        const randomCharacterNumber = Math.floor(Math.random() * 83) + 1;
        const characterData = await fetchData(`https://www.swapi.tech/api/people/${randomCharacterNumber}`);
        const character = characterData.result.properties;

        const homeworldURL = character.homeworld;
        const homeworldData = await fetchData(homeworldURL);
        
        loading.style.display = 'none';
        displayCharacterInfo(character, homeworldData.result.properties);
    } catch (err) {
        loading.style.display = 'none';
        error.style.display = 'block';
        console.error('Error fetching data:', err);
    }
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
            throw error;
        });
}

function displayCharacterInfo(character, homeworldData) {
    const characterInfo = document.getElementById('character-info');

    const infoHTML = `
        <h2>${character.name}</h2>
        <p>Height: ${character.height}</p>
        <p>Gender: ${character.gender}</p>
        <p>Birth Year: ${character.birth_year}</p>
        <p id="homeworld-info">Home World: ${homeworldData.name}</p>
    `;

    characterInfo.innerHTML = infoHTML;

    setTimeout(() => {
        const homeworldInfo = document.getElementById('homeworld-info');
        homeworldInfo.style.display = 'block';
    }, 1500);
}
