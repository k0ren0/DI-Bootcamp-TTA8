import express from "express";
import { emojis } from "./emojis/emojis.js";
import path from "path";

const app = express();

const __dirname = path.resolve();
console.log(__dirname);

app.use("/", express.static(__dirname + "/public"));

app.listen(3001, () => {
    console.log("run on 3001");
});

app.get("/emojis", (req, res) => {
    const randomIndx = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndx];
    const shuffleEmojis = shuffleArray([...emojis]); // Copy the array before shuffling
    res.json({ shuffleEmojis, randomEmoji });
});

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
