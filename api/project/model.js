const db = require('../../data/dbConfig')

const getAll = () => {
    return db('projects')
}

const getById = (id) => {
    return db('projects').where('project_id', id)
}

const create = async (newProject) => {
    const [id] = await db('projects').insert(newProject)
    return getById(id)
}

module.exports = {getAll, getById, create}