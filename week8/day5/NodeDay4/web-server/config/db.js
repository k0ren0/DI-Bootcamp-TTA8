const knex = require("knex");
require('dotenv').config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER, //'postgres'
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  },
});

const users = [
  { id: 1, name: "John", email: "jjj@gamail.com" },
  { id: 2, name: "Marry", email: "mmm@gamail.com" },
  { id: 3, name: "Anney", email: "aaa@gamail.com" },
];

const products = [
  { id: 1, name: "item1", desc: "bla bla bla 1" },
  { id: 2, name: "item2", desc: "bla bla bla 2" },
  { id: 3, name: "item3", desc: "bla bla bla 3" },
];

module.exports = {
  db,
  users,
  products,
};
