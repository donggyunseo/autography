const express = require('express')
const router = express.Router()

const pool = require('../utils/mysql').default

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const connection = await pool.getConnection()
    const [results] = await connection.query('SELECT * FROM ACCOUNT_TB')
    let sum = 0
    for (const user of results) {
      sum += user.money
    }
    const avg = sum / results.length
    const [results2] = await connection.query('SELECT * FROM ACCOUNT_TB WHERE money > ?', [avg])
    res.json({ status: 200, arr: results2 })
  } catch (err) {
    console.log(err.message)
    res.json({ status: 500, msg: 'error' })
  }
})
/*
router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM ACCOUNT_TB', (_err, results) => {
    let sum = 0
    for (const user of results) {
      sum += user.money
    }
    const avg = sum / results.length
    connection.query('SELECT * FROM ACCOUNT_TB WHERE money > ?', [avg], (_err, results) => {
      res.json({ status: 200, arr: results })
    })
  })
})
*/

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

module.exports = router
