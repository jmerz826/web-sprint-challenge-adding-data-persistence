const router = require('express').Router()
const Task = require('./model')

router.post('/', (req, res, next) => {

})

router.get("/", (req, res, next) => {
  Task.getAll()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(err => next(err));
});

module.exports = router