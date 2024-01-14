const knex = require('knex');

const db = knex({
    client: "pg",
    connection: {
        host: "berry.db.elephantsql.com" , //"127.0.0."
        port: 5432,
        user : 'gnijujni',
        password : '5RiwnM1Y71dZdr4DldOM7UxzpaVGCUlZ',
        database : 'gnijujni'
    }
});

// db.select("id", "name", "email", "password")
// .from("users_knex")
// .then(rows => {
//     console.log(rows);
// })
// .catch((err) => {
//     console.log(err);
// })

// console.log("dv=>", db)

// db("users_knex")
// .select("id", "name", "email", "password")
// .then((data) => {
//     console.log(data);
// });

// db.raw("select * from users_knex").then((data) => {
//     console.log(data.rows);
// });

// //INSERT
// // v1
// db("users_knex")
// .insert({name: 'nextnew', email: 'nextnew@gamail.com', password: 'nextnewnewnew'})
// .returning("*")
// .then(data => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// });

// // v2

// db("users_knex")
// .insert(
//     [
//     {name: 'nextnew', email: 'nextnew@gamail.com', password: 'nextnewnewnew'},
//     {name: 'nextnew', email: 'nextnew@gamail.com', password: 'nextnewnewnew'},
//     {name: 'nextnew', email: 'nextnew@gamail.com', password: 'nextnewnewnew'}
//     ]
//     )
// .returning("*")
// .then(data => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// });

// //UPDATE

// db("users_knex")
// .update({name: "Dan"})
// .where({id: 5})
// .returning("*")
// .then((data) => {
//     console.log(data);
//     })
// .catch((err) => {
//     console.log(err);
// })

// // //DELETE

// db("users_knex")
// .where({id:6})
// .del()
// .returning("*")
// .then((data) => {
//     console.log(data);
//     })
// .catch((err) => {
//     console.log(err);
// });