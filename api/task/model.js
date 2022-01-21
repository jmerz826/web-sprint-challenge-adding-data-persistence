const db = require('../../data/dbConfig')

const getAll = () => {
    return db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')
}

module.exports = {getAll}