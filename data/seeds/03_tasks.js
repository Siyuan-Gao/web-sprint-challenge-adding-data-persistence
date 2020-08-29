exports.seed = async function(knex) {
  await knex("tasks").insert([
      {
        project_id: 1,
        description: "View Table Structure",
        notes: "Before adding record it's a good idea to obtain the information."
      },
      {
        project_id: 1,
        description: "Adding data to tables",
        notes: "get the data you wanted."
      },
      {
        project_id: 1,
        description: "id AUTO_INCREMENT",
        notes: "primary key should be unique."
      },
      {
        project_id: 2,
        description: "Setup the test",
        notes:"put your database into a known state before running tests."
      },
      {
        project_id: 2,
        description: "Run the test",
        notes: "use a database regression testing tool."
      },
      {
        project_id: 3,
        description: "get the debugging tool",
        notes: "use the tool carefully. "
      },
  ]);
};