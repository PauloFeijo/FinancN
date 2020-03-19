const conf = require('../knexfile')
const knex = require('knex')(conf)

knex.migrate.latest([config])

module.exports = knex