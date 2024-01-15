const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile[process.env.NODE_ENV || 'development']);
const { attachPaginate } = require('knex-paginate');
require('dotenv').config();

attachPaginate();

module.exports = knex;


