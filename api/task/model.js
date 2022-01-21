const db = require('../../data/dbConfig')

const getAll = () => {
    return db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')
}

const getById = (id) => {
    return db('tasks').where('task_id', id)
}

const create = async (newTask) => {
    const [id] = await db('tasks').insert(newTask)

    return getById(id)
}

module.exports = {getAll, getById, create}