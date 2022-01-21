const router = require('express').Router()
const Task = require('./model')

router.post('/', (req, res, next) => {
    Task.create(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(err => next(err))
})

router.get("/", (req, res, next) => {
  Task.getAll()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(err => next(err));
});

router.get("/:id", (req, res, next) => {
  Task.getById(req.params.id)
    .then((t) => {
      res.status(200).json(t);
    })
    .catch((err) => next(err));
});

module.exports = router