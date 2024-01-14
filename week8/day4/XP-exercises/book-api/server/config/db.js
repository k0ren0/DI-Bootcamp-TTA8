const knex = require("knex");

const db = knex({
    client: "pg",
    connection: {
        host: "berry.db.elephantsql.com" , 
        port: 5432,
        user : 'gnijujni',
        password : '5RiwnM1Y71dZdr4DldOM7UxzpaVGCUlZ',
        database : 'gnijujni'
    },
});
  
  module.exports = db;