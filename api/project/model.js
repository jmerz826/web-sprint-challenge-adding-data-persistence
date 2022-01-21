const db = require('../../data/dbConfig')

const getAll = async () => {
    const projs = await db('projects')
    const mapped = projs.map(p => {
        return ({
            ...p,
            project_completed: Boolean(p.project_completed)
        })
    })
    return mapped
}

const getById = async (id) => {
    let [result] = await db('projects').where('project_id', id)
    result = { ...result, project_completed: Boolean(result.project_completed) }
    
    return result
}

const create = async (newProject) => {
    const [id] = await db('projects').insert(newProject)
    return getById(id)
}

module.exports = {getAll, getById, create}