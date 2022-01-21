
exports.seed = function(knex) {
  return knex('tasks').insert([
    {task_description: 'plan', task_notes: 'brainstorm and such', project_id: 1},
    {task_description: 'execute', task_notes: 'do the thing', project_id: 1},
    {task_description: 'close', task_notes: 'finish up', project_id: 2}
  ]);
};
