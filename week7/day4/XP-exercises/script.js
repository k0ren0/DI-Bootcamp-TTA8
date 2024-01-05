// Exercise 1 : Giphy API

const gifUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

async function fetchApi() {
    try {
        const response = await fetch(gifUrl);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        
        console.log("Data from Gif API:", data);
        
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

fetchApi();