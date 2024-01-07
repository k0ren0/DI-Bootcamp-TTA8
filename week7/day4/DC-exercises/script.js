const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const gifContainer = document.getElementById('gifContainer');

function fetchGif() {
  const input = document.getElementById('input').value;

  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${input}`)
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.data.images.fixed_height.url;
      appendGif(input, imageUrl);
    })
    .catch(error => console.error('Error Gif fetching:', error));
}

function appendGif(category, imageUrl) {
  const gifElement = document.createElement('div');
  gifElement.innerHTML = `
    <img src="${imageUrl}" alt="${category}">
    <button onclick="deleteGif(this)">Delete</button>`;
  gifContainer.appendChild(gifElement);
}

function deleteGif(button) {
  const gifElement = button.parentNode;
  gifContainer.removeChild(gifElement);
}

function deleteAllgifs() {
  gifContainer.innerHTML = '';
}