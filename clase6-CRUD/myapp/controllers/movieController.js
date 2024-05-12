/* const db = require('../db/data'); */ /* sacar */

const db = require('../database/models');

const indexController = {
    index: function(req, res) {
    
      db.Movie.findAll()
      .then((result) => {
        return res.render("movies", {listaPeliculas: result})
      }).catch((err) => {
         console.log(err);
      });
      
    },
    detalle: function(req, res) {
      let idPelicula = req.params.idPelicula;

      return res.render("detalleMovies", {movie: db.filtrarPorID(idPelicula)});    
    },
    showFormCreate: function(req,res) {
      return res.render("registerMovie");
    },
    showFormUpdate: function(req,res) {
      return res.render("updateMovie");
    }
}

module.exports = indexController;





