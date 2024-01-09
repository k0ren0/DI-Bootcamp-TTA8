const express = require('express');
const app = express();
app.use(express.json());

const data = [
  {
    id: 1,
    title: 'Masters of Doom',
    author: 'David Kushner',
    publishedYear: 2003,
  },
  {
    id: 2,
    title: 'Ready Player One',
    author: 'Ernest Cline',
    publishedYear: 2011,
  },
  {
    id: 3,
    title: 'The Legend of Zelda: Hyrule Historia',
    author: 'Patrick Thorpe',
    publishedYear: 2013,
  },
 
];

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`I'm here http://localhost:${PORT}`);
});

app.get("/api/books",  (req, res) => {
    res.json(data);
});


app.get("/api/books/:bookId", (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = data.find(book => book.id === bookId);
    book ? res.status(200).json(book) : res.status(404).json({ message: "Book not found" });
});

app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;
  
    const newBook = {
      id: data.length + 1,
      title,
      author,
      publishedYear,
    };
  
    data.push(newBook);
  
    res.status(201).json(newBook);
  });