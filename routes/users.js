var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
router.get('/kaka', function(req, res, next) {
  res.json({status: 200, msg: 'success'});
  // let obj = {'a':1, 'b':2};
  // obj.a == 1
});

router.get('/giveme', function(req, res, next) {
  let number = Math.random();
  res.json({status: number, msg: 'success'});
  // let obj = {'a':1, 'b':2};
  // obj.a == 1
});
*/

module.exports = router;
