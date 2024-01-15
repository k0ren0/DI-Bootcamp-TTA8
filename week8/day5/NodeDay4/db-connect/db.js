const knex = require("knex");
require('dotenv').config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER, //'postgres'
    password: DB_PASS,
    database: DB_DATABASE,
  },
});

// db.select("id", "name", "email", "password")
//   .from("users")
//   .then((rows) => {
//     console.log(rows);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// db("users")
//   .select("id", "name", "email", "password")
//   .then((data) => {
//     console.log(data);
//   });

// db.raw("select * from users").then((data) => {
//   console.log(data.rows);
// });

// console.log("db=>", db);

//INSERT
//

//UPDATE
// db("users")
//   .where({ id: 9 })
//   .returning("*")
//   .update({ name: "Aron" })

//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// DELETE
db("users")
  .where({ id: 8 })
  .del()
  .returning("*")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
