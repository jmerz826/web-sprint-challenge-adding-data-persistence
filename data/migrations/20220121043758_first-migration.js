exports.up = async function(knex) {
    await knex.schema
        .createTable('projects', table => {
            table.increments('project_id')
            table.text('project_name', 128).notNullable()
            table.string('project_description')
            table.boolean('project_completed').defaultTo(false)
        })
        .createTable('resources', table => {
            table.increments('resource_id')
            table.text('resource_name', 128).notNullable().unique()
            table.string('resource_description')
        })
        .createTable('tasks', table => {
            table.increments('task_id')
            table.text('task_description', 128).notNullable()
            table.string('task_notes')
            table.boolean('task_completed').defaultTo(false)
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
};
