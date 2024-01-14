const db = require('../config/db');

const getAllBooks = () => db('books').select('*');

const getBookById = (id) => db('books').where({ id }).first();

const createBook = (title, author, publishedYear) =>
  db('books').insert({ title, author, publishedYear }).returning('*');

const updateBook = (id, title, author, publishedYear) =>
  db('books').where({ id }).update({ title, author, publishedYear }).returning('*');

const deleteBook = (id) => db('books').where({ id }).del();

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};