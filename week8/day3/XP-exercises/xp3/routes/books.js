const express = require('express');
const router = express.Router();

const books = [];

router.get('/', (req, res) => {
  res.json(books);
});

router.post('/', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: "Write title and description" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    description,
    done: false,
  };

  todos.push(newBook);
  res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description, done } = req.body;

  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books[index] = {
      ...books[index],
      title: title || books[index].title,
      description: description || books[index].description,
      done: done !== undefined ? done : books[index].done,
    };
    res.json(books[index]);
  } else {
    res.status(404).json({ error: "I cant't update. Book not found" });
  }
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    const deletedBook = books.splice(index, 1);
    res.json(deletedBook[0]);
  } else {
    res.status(404).json({ error: "I cant't delete. Book not found" });
  }
});

module.exports = router;