/* importar info */
const autos = require('../db/autos');

/* lo que hace el modulo */
const autosController = {
    index: function(req, res) {
        return res.render('autos', {lista: autos.lista});
    },
    filtradoPorColor: function(req, res) {
        let colorBuscado = req.params.colorBuscado; // rojo
    
        if (colorBuscado != undefined) {
            /* aqui necesito trabajar para filtrar */
            return res.render('autos', {lista: autos.filtrarPorColor(colorBuscado)})
        } else {
            return res.send("agrega un color como parametro");
        }
    },
    vistaDeAuto: function(req, res) {
        return res.render('autos');
    }
};

/* exportar el modulo */
module.exports = autosController;