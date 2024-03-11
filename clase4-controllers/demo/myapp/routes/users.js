var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let myarray = [
    {
      nombre: "Brian",
      usuario: 25
    },
    {
      nombre: "carlos",
      usuario: 26
    },
    {
      nombre: "Luis",
      usuario: 27
    },
  ]
  res.send(myarray);
});

module.exports = router;
