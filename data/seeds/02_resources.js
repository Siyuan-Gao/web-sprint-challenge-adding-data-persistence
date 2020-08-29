exports.seed = async function(knex) {
  await knex('resources').insert([
    {
      name: 'SQliteStudio',
      description:'a tool is a free GUI tool for managing SQLite databases.'
    },
    {
      name: 'SQL Test',
      description: 'Allows to run unit tests for SQL Server databases.'
    },
    {
      name: 'SQL Server Management Studio (SSMS)',
      description:'comes with automated debugging capabilities to help developers debug their scripts' 
    },
  ]);
};