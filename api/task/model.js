const db = require('../../data/dbConfig')

const getAll = async () => {
    const all = await db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')
    
    const mapped = all.map(task => {
        return ({
            ...task,
            task_completed: Boolean(task.task_completed)
        })
    })
    return mapped
}

const getById = async (id) => {
    let [x] = await db('tasks').where('task_id', id)
    x = {...x, task_completed: Boolean(x.task_completed)}
    return x
}

const create = async (newTask) => {
    const [id] = await db('tasks').insert(newTask)

    return getById(id)
}

module.exports = {getAll, getById, create}