const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/', booksController.readAll);
router.get('/:bookId', booksController.readOne);
router.post('/', booksController.create);
router.put('/:bookId', booksController.update);
router.delete('/:bookId', booksController.deleteBook);

module.exports = router;
