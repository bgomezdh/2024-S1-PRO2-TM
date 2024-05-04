var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const movieController = require('../controllers/movieController');

/* GET home page. */
router.get('/', movieController.index);

/* GET details movie page. */
router.get('/id/:idPelicula', movieController.detalle);


module.exports = router;