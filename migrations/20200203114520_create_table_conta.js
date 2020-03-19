
exports.up = function(knex) {
    return knex.schema.createTable('conta', table => {
        table.increments('id').primary()
        table.string('descricao').notNull()
        table.string('numero')
        table.double('saldo').notNull().default(0)
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('conta')
};
