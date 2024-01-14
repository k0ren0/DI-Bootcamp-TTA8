const { db } = require("../config/db.js")

const _getAllUsers = () => {
    return db("users_knex").select("*");
}

module.exports = {
    _getAllUsers
}