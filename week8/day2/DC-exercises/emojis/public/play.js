let correntEmoji;

const getEmojisApi = () => {
    return fetch("http://localhost:3001/emojis")
        .then(res => res.json())
        .then(emojisapi => {
            console.log(emojisapi);
            render(emojisapi.shuffleEmojis, emojisapi.randomEmoji);
            updateScore(emojisapi.playerScore);
            fetchLeaderboard();
        correntEmoji = emojisapi.randomEmoji;
        })
        .catch(error => {
            console.error('Error fetching emojis:', error);
        });
}


const checkGuessApi = (name, guess) => {
    console.log("Name:", name);
    console.log("Guess:", guess);

    return fetch("http://localhost:3001/checkGuess", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, guess }),
    })
    .then(res => res.json())
    .then(result => {
        console.log(result.message);

        if (result.message === "Correct") {
            alert("Correct guess!"); 
        } else {
            alert("Incorrect guess!");
        }
    })
    .catch(error => {
        console.error('Error checking guess:', error);
    });
}

const render = (options, emoji) => {
    const root = document.getElementById("root");
    const html = options.map(item => {
        return item.name + " ";
    });
    root.innerHTML = `Options: ${html.join("")} Hint: ${emoji.emoji}`;
};

const submitGuess = () => {
    const guessInput = document.getElementById("guessInput");
    const guess = guessInput.value.trim();

    console.log("Sending Guess:", guess);

    if (guess) {
        checkGuessApi(correntEmoji.name, guess); 
        guessInput.value = "";
    } else {
        alert("Please enter a guess");
    }
}

const updateScore = (score) => {
    const scoreValue = document.getElementById("scoreValue");
    scoreValue.textContent = score;
}

const fetchLeaderboard = () => {
    fetch("http://localhost:3001/leaderboard")
        .then(res => res.json())
        .then(leaderboardData => {
          
            const leaderboardElement = document.getElementById("leaderboard");
            leaderboardElement.innerHTML = "<h2>Leaderboard</h2>";
            leaderboardData.forEach((entry, index) => {
                leaderboardElement.innerHTML += `<p>${index + 1}. ${entry.name}: ${entry.score}</p>`;
            });
        })
        .catch(error => {
            console.error('Error fetching leaderboard:', error);
        });
}

getEmojisApi();
