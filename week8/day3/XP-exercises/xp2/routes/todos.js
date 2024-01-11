const express = require('express');
const router = express.Router();

const todos = [];

router.get('/', (req, res) => {
  res.json(todos);
});

router.post('/', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: "Write title and description" });
  }

  const newTodo = {
    id: todos.length + 1,
    title,
    description,
    done: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description, done } = req.body;

  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    todos[index] = {
      ...todos[index],
      title: title || todos[index].title,
      description: description || todos[index].description,
      done: done !== undefined ? done : todos[index].done,
    };
    res.json(todos[index]);
  } else {
    res.status(404).json({ error: "I cant't update. Todo not found" });
  }
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo[0]);
  } else {
    res.status(404).json({ error: "I cant't delete. Todo not found" });
  }
});

module.exports = router;