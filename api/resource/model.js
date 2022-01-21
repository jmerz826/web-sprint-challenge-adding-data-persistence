const db = require('../../data/dbConfig')

const getById = function (id){
    return db('resources').where('resource_id', id)
}

const getAll = () => {
    return db('resources')
}

const addResource = async (newResource) => {
    const [id] = await db('resources').insert(newResource)
    
    return getById(id)
}


module.exports = {getById, addResource, getAll}