const getEmojisApi = () => {
    return fetch("http://localhost:3001/emojis")
        .then(res => res.json())
        .then(emojisapi => {
            console.log(emojisapi);
            render(emojisapi.shuffleEmojis, emojisapi.randomEmoji);
        })
        .catch(error => {
            console.error('Error fetching emojis:', error);
        });
}

getEmojisApi();

const render = (options, emoji) => {
    const root = document.getElementById("root");
    const html = options.map(item => {
        return item.name + " ";
    });
    root.innerHTML = `Options: ${html.join("")} Hint: ${emoji.emoji}`;
};
