// // Exercise 1 : Giphy API

// const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
// const gifUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// async function fetchApi() {
//     try {
//         const response = await fetch(gifUrl);

//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} - ${response.statusText}`);
//         }
//         const data = await response.json();
        
//         console.log("Data from Gif API:", data);
        
//     } catch (error) {
//         console.error("Error fetching data:", error.message);
//     }
// }

// fetchApi();



// // Exercise 2 : Giphy API

// const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
// const endpoint = 'https://api.giphy.com/v1/gifs/search';
// const searchTerm = 'sun';
// const limit = 10;
// const offset = 2;

// const url = `${endpoint}?api_key=${apiKey}&q=${searchTerm}&limit=${limit}&offset=${offset}`;

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`); //check status
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data); // log data
//   })
//   .catch(error => {
//     console.error('Fetch error:', error); // log errors
//   });

// Exercise 3 : Async Function

// // fetch("https://www.swapi.tech/api/starships/9/")
// // .then(response => response.json())
// // .then(objectStarWars => console.log(objectStarWars.result));

async function fetchGet() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (!response.ok) {
            throw new Error(`Error status: ${response.status}`);
        }
        const objectStarWars = await response.json();
        console.log(objectStarWars.result);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

fetchGet();