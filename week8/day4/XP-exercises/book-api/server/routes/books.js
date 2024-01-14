const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

// Read all books
router.get('/', booksController.readAll);

// Read a specific book
router.get('/:bookId', booksController.readOne);

// Create a new book
router.post('/', booksController.create);

// Update a book
router.put('/:bookId', booksController.update);

// Delete a book
router.delete('/:bookId', booksController.deleteBook);

module.exports = router;
