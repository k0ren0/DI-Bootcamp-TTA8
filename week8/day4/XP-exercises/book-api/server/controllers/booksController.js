// server/controllers/booksController.js

const Book = require('../models/book');

// Read all books
const readAll = async (req, res) => {
  try {
    const books = await Book.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// Read a specific book
const readOne = async (req, res) => {
  try {
    const book = await Book.getBookById(req.params.bookId);
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.json(book);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// Create a new book
const create = async (req, res) => {
  const { title, author, publishedYear } = req.body;

  try {
    const newBook = await Book.createBook(title, author, publishedYear);
    res.status(201).json(newBook[0]);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// Update a book
const update = async (req, res) => {
  const { title, author, publishedYear } = req.body;

  try {
    const book = await Book.updateBook(req.params.bookId, title, author, publishedYear);
    if (!book) {
      return res.status(404).send('Book not found');
    }

    res.json(book[0]);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    const book = await Book.deleteBook(req.params.bookId);
    if (!book) {
      return res.status(404).send('Book not found');
    }

    res.json({ msg: 'Book removed' });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

module.exports = {
  readAll,
  readOne,
  create,
  update,
  deleteBook,
};
