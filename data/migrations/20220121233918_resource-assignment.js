
exports.up = async function(knex) {
    await knex.schema
    .createTable('project_resources', table => {
        table.increments('assignment_id')
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.text('project_name', 128)
            .notNullable()
            .references('project_name')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('project_resources')
};