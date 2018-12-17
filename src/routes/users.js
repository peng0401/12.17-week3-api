var express = require('express');
var router = express.Router();

var {query} = require("../config/connection");

/* GET users listing. */
router.get('/api/get/train-ticket', function(req, res, next) {
  console.log(query)
  let sql = `select * from week3`

  query(sql).then((data) => {
    res.json({code : 1, data : data})
  }).catch((err) => {
    res.json({code : 0,msg : err})
  })

});

module.exports = router;
