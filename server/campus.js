const router = require('express').Router();
const {Campus} = require('../db/models');

module.exports = router;

router.get('/', function (req, res, next) {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

router.get('/:id', function (req, res, next) {
  Campus.findOne({where:{id: req.params.id}})
    .then(campus => res.json(campus))
    .catch(next);
})

router.post('/', function (req, res, next) {
  Campus.create(req.body)
  .then(function(campus) {
    res.status(201).json(campus);
  })
  .catch(next);
})


router.put('/:id', function (req, res, next) {

  Campus.update(
    req.body,
    {where: {id: req.params.id}}
  )
  .then(function(campus) {
    res.json(campus);
  })
  .catch(next);
})


router.delete('/:id', function (req, res, next) {
  Campus.destroy({where: {id: req.params.id}})
  .then(function() {
    res.json('success')
  })
  .catch(next)

})
