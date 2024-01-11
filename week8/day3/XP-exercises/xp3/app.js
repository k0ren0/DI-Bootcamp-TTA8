const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const booksRout = require('./routes/books');
app.use('/books', booksRout);


app.get('/', (req, res) => {
  res.send('Hellllllllllooooooo, its your list of books!');
});

app.listen(port, () => {
  console.log(`I'm running here http://localhost:${port}`);
});
