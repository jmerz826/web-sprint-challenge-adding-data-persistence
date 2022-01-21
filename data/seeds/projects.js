
exports.seed = function(knex) {
  return knex('projects').insert([
    {project_name: 'Empire State Building', project_description: 'new york city construction', project_completed: true},
    {project_name: 'Space Needle', project_description: 'tall and in seattle'},
    {project_name: 'St. Louis Arch', project_description: 'just an arch'}
  ]);
};