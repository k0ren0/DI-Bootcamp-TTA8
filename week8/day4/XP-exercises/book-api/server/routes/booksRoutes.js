const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController.js');

router.get('/', booksController.getAllBooks);
router.get('/:bookId', booksController.getBookById);
router.post('/', booksController.createBook);

module.exports = router;

