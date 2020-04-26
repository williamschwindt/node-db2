
exports.up = async function(knex) {
    await knex.schema.createTable('cars', (table) => {
        table.increments('id');
        table.text('vin').notNull().unique();
        table.text('make').notNull();
        table.text('model').notNull();
        table.float('mileage').notNull();
        table.text('transmitionType');
        table.text('titleStatus');
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTabelIfExists('cars');
};
