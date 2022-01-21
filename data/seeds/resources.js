
exports.seed = function(knex) {
      return knex('resources').insert([
        {resource_name: 'coal', resource_description: 'used for fuel'},
        {resource_name: 'water', resource_description: 'makes things wet'},
        {resource_name: 'fire', resource_description: 'makes things hot'}
      ]);
};
