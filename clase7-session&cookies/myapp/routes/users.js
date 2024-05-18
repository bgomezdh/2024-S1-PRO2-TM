var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const userController = require('../controllers/userController');

/* mostrar formulario REGISTER */
router.get('/register', userController.register);

/* mostrar formulario REGISTER */
router.post('/register', userController.store);

/* mostrar formulario LOGIN */
router.get('/login', userController.login);

/* mostrar formulario LOGIN */
router.post('/login', userController.loginUser);

module.exports = router;
