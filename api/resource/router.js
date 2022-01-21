const router = require('express').Router()
const Resource = require('./model')

router.post('/', (req, res, next) => {
    Resource.addResource(req.body)
        .then(newR => {
            res.status(201).json(newR)
        })
        .catch(err => next(err))
})

router.get('/', (req, res, next) => {
    Resource.getAll()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    Resource.getById(req.params.id)
        .then(r => {
            res.status(200).json(r)
        })
        .catch(err => next(err))
})


module.exports = router