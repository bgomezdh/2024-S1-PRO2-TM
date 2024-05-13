var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const movieController = require('../controllers/movieController');

/* GET home page. */
router.get('/', movieController.index);

/* GET details movie page. */
router.get('/id/:idPelicula', movieController.detalle);

/* GET Creat movie page. */
router.get('/register', movieController.showFormCreate);

/* POST procesar la info del formulario */
router.post("/register", movieController.store)

/* GET update movie page. */
router.get('/editMovie/:idPelicula', movieController.showFormUpdate);

/* GET search one movie page. */
router.get('/busqueda', movieController.showOne);

/* POST procesar la info del formulario de actualizar pelicula */
router.post("/update", movieController.update);

router.post("/deleteMovie", movieController.delete)



module.exports = router;