const router = require('express').Router()
const Project = require('./model')

router.post('/', (req, res, next) => {
    Project.create(req.body)
        .then(proj => {
            res.status(201).json(proj)
        })
        .catch(err => next(err))
})

router.get('/', (req, res, next) => {
    Project.getAll()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => next(err))
})

module.exports = router