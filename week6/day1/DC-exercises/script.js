const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

function createPlanetDiv(planetName) {
    const planetDiv = document.createElement('div');
    planetDiv.className = 'planet ' + planetName;
    document.querySelector('.listPlanets').appendChild(planetDiv);
}

planets.forEach(createPlanetDiv);

const styleElement = document.createElement('style');
styleElement.textContent = `
    .mercury { background-color: #8a8a8a; } /* gray */
    .venus { background-color: #e1b382; } /* light brown */
    .earth { background-color: #4ea7e2; } /* light blue */
    .mars { background-color: #e07c58; } /* orange */
    .jupiter { background-color: #dbb185; } /* light orange */
    .saturn { background-color: #e3b264; } /* light brown */
    .uranus { background-color: #9fd8d8; } /* light cyan */
    .neptune { background-color: #537cc5; } /* dark blue */
`;

document.head.appendChild(styleElement);