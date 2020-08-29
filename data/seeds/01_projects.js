exports.seed = async function(knex) {
  await knex('projects').insert([
    {
      name: 'Insert data',
      description: 'data needed for the new project'
    },

    {
      name: 'Database testing',
      description: "do a database testing"
    },

    {
      name: 'Fix bugs',
      description: "detecting and removing of existing and potential errors "
    },
   
  ]);
};