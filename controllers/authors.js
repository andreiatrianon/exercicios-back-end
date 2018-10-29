const router = require('express').Router();
const models = require('../models');
const Author = models.Author;

router.get('/authors', (req, res) => {
  Author
    .findAll()
    .then(list => {
      const authors = list.map(author => author.dataValues)
      res.send(authors)
    })
})

router.post('/authors', (req, res) => {
  Author
    .create(req.body)
    .then(author => res.send(author))
})

router.get('/authors/:id', (req, res) => {
  Author
    .findById(req.params.id)
    .then(author => {
      author?
      res.send(author.dataValues):
      res.sendStatus(404)
    })
})

router.put('/authors/:id', (req, res) => {
  Author
    .update({...req.body}, {where: {id: req.params.id}})
    .then(() => {
      Author
        .findById(req.params.id)
        .then(author => res.send(author.dataValues))
    })
})

router.delete('/authors/:id', (req, res) => {
  Author
    .destroy({where:{id: req.params.id}})
    .then(() => res.sendStatus(200))
})

module.exports = router;