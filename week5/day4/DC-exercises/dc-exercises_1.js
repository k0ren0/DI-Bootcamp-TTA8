// Daily Challenge: Not Bad

const sentence = "The movie is not that bad, I like it";

const wordNot = sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");

if (wordNot < wordBad && wordNot !== -1) {
    const result = `${sentence.slice(0, wordNot)}good${sentence.slice(wordBad + 3)}`;
    console.log(result);
} else {
    console.log(sentence);
}
