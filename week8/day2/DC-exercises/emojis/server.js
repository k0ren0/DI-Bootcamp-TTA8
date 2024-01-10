import express from "express";
import { emojis } from "./emojis/emojis.js";
import path from "path";

const app = express();
app.use(express.json());

const __dirname = path.resolve();
app.use("/", express.static(__dirname + "/public"));

app.listen(3001, () => {
    console.log("Server running on port 3001");
});

let playerScore = 0;
const leaderboardData = [
    { name: "Player1", score: 50 },
    { name: "Player2", score: 40 },
    { name: "Player3", score: 30 },
];

app.get("/emojis", (req, res) => {
    const randomIndx = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndx];
    const shuffleEmojis = shuffleArray([...emojis]);
    res.json({ shuffleEmojis, randomEmoji, playerScore });
});

app.post("/emojis", (req, res) => {
    const { newEmoji } = req.body;
    emojis.push(newEmoji);

    const randomIndx = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndx];
    const shuffleEmojis = shuffleArray([...emojis]);
   
    playerScore += 10;

    res.json({ shuffleEmojis, randomEmoji, playerScore });
});

app.post("/checkGuess", (req, res) => {
    const { name, guess } = req.body;
    console.log(name);
    console.log(guess);
        
    if (name === guess) {
        return res.json({ message: "Correct" });
    } else {
        return res.json({ message: "Incorrect" });
    }
});

app.get("/leaderboard", (req, res) => {
    res.json(leaderboardData);
});

app.post("/leaderboard", (req, res) => {
    const newLeaderboard = req.body;
    newLeaderboard.sort((a, b) => b.score - a.score);
    leaderboardData.length = 0;
    leaderboardData.push(...newLeaderboard.slice(0, 3));
    res.json(leaderboardData);
});

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
