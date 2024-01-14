const books = require("../models/booksModel.js");

exports.getAllBooks = (req, res) => {
  res.json(books);
};

exports.getBookById = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((book) => book.id === bookId);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
};

exports.createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear,
  };

  books.push(newBook);

  res.status(201).json(newBook);
};