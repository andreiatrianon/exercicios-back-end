const router = require('express').Router()

router.get('/', function(request, response) {
  response.send('HELLO')
})

router.use(require('../controllers/authors'))

module.exports = router