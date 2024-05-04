const db = require('../db/data');

const indexController = {
    index: function(req, res) {
    
      return res.render("movies", {listaPeliculas : db.lista}); 
    },
    detalle: function(req, res) {
      let idPelicula = req.params.idPelicula;

      return res.render("detalleMovies", {movie: db.filtrarPorID(idPelicula)});    
    }
}

module.exports = indexController;





