/* requerir express y Router() */
const express = require('express');
const router = express.Router();

/* modulo propio */
const autos = require('../db/autos');


router.get('/', function(req, res) {
    return res.send("aqui es el listado de autos");
});

/* Crear los sufijos */
router.get('/todos', function(req, res) {
    return res.send(autos.lista);
});

router.get('/crear', function(req, res) {
    return res.send("aqui se crean todo el listado de los autos");
});

router.get('/color/:colorBuscado?', function(req, res) {
    let colorBuscado = req.params.colorBuscado; // rojo

    if (colorBuscado != undefined) {
        /* aqui necesito trabajar para filtrar */

        return res.send(autos.filtrarPorColor(colorBuscado))

    } else {
        return res.send("agrega un color como parametro");
    }

});


/* exportar el roteador */
module.exports = router; 

/* ruta localhost:3000'/autos' */