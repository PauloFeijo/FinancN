const conf = require('./knexfile')
const knex = require('knex')(conf)

knex.migrate.latest([conf])

module.exports = knex