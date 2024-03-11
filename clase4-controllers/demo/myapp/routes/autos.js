/* requerir express y Router() */
const express = require('express');
const router = express.Router();

/* modulo propio */
const autosController = require('../controllers/autosController');


router.get('/', autosController.vistaDeAuto);

/* Crear los sufijos */
router.get('/todos', autosController.index);

router.get('/crear', function(req, res) {
    return res.send("aqui se crean todo el listado de los autos");
});

router.get('/color/:colorBuscado?', autosController.filtradoPorColor);


/* exportar el roteador */
module.exports = router; 

/* ruta localhost:3000'/autos' */