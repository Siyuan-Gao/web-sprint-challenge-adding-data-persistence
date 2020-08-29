const knex = require('knex');

const db = require("../data/config.js")

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};


function find() {
    return db('tasks')
        .join("projects", "tasks.project_id", "projects.id")
        .select("tasks.*", "projects.name as projectName", "projects.description as projectDesc")
}

function findById(id) {
    return db('tasks')
        .where({ id })
        .first();
}

function add(task) {
    return db('tasks')
        .insert(task)
        .then(ids => {
            return findById(ids[0]);
        });
}

function update(changes, id) {
    return db('tasks')
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id);
        });
}

function remove(id) {
    return db('tasks')
        .where('id', id)
        .del();
}