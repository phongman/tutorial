var express = require('express');
var router = express.Router();

router.get('/Comedy', function (req, res) {
    res.send('Comedy')
  })

  router.get('/Action', function (req, res) {
    res.send('Action')
  })

  module.exports = router;