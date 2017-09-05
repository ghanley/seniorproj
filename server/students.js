const router = require('express').Router();
const {Student} = require('../db/models');

module.exports = router;

router.get('/', function (req, res, next) {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});


router.get('/:id', function (req, res, next) {
  Student.findOne({where:{id: req.params.id}})
    .then(student => res.json(student))
    .catch(next);
})

router.post('/', function (req, res, next) {
  console.log('trying to post')
  Student.create(req.body)
  .then(function(student) {
    console.log('inthe post!');
    res.status(201).json(student);
  })
  .catch(next);
})


router.put('/:id', function (req, res, next) {

  Student.update(
    req.body,
    {where: {id: req.params.id}}
  )
  .then(function(student) {
    res.json(student);
  })
  .catch(next);
})


router.delete('/:id', function (req, res, next) {
  Student.destroy({where: {id: req.params.id}})
  .then(function() {
    res.json('success')
  })
  .catch(next)

})
