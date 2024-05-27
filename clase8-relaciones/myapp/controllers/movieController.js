/* const db = require('../db/data'); */ /* sacar */

const { Association } = require("sequelize");
const db = require("../database/models");

const indexController = {
  index: function (req, res) {
    let filtrado = {
     /*  where: [{awards: 1}, {length: 120}] */
     /* order: [["title", "ASC"]],
     limit: 2,
     offset: 1 */
    };

    db.Movie.findAll(filtrado)
      .then(function (results) {
        return res.render("movies", {listaPeliculas: results})
      })
      .catch(function (error) {
        return console.log(error);;
      });
  },
  detalle: function (req, res) {
    let idPelicula = req.params.idPelicula;

    let filtrado = {
      include: [
        {association: "genre"},
        {association: "actor"}
      ]
    }

    db.Movie.findByPk(idPelicula, filtrado)
    .then(function(result) {
              return res.render("detalleMovies", {movie: result})
      })
      .catch(function(error) {
        return console.log(error);;
    });

    
   

    /* return res.render("detalleMovies", { movie:  }); */
  },
  showFormCreate: function (req, res) {

    if (req.session.user == undefined) {
        return res.redirect("/users/login")
    } else {
      return res.render("registerMovie");
    }


    
  },
  showFormUpdate: function (req, res) {
    let id = req.params.idPelicula;

    db.Movie.findByPk(id)
    .then((result) => {
      return res.render("updateMovie", {movie: result});
    }).catch((err) => {
        return console.log(err);
    });
    
  },
  showOne:function(req, res) {
    let qs = req.query.pelicula;

    let filtrado = {
      where: [{title: qs}]
    }

    db.Movie.findOne(filtrado)
    .then(function(result) {
      return res.send(result);
    }).catch(function(error) {
      return console.log(error);;
    });

    

  },
  store: function(req, res) {
    let form = req.body; /* <--------- aqui guarde la info del formulario  */

    db.Movie.create(form)
    .then((result) => {
        return res.redirect("/movies")
    }).catch((err) => {
        return console.log(err);
    });
   
  },
  update: function(req, res) {
    let form = req.body;


   let filtro = {
      where: [{id: form.id}]
    }; 

    db.Movie.update(form, filtro)
    .then((result) => {
      return res.redirect("/movies/id/"+ form.id);
    }).catch((err) => {
      return console.log(err);
    });
    
  },
  delete: function(req, res) {
    let idParaEliminar = req.body.id;

    let filtro = {
      where: [{id: idParaEliminar }]
    }

    db.Movie.destroy(filtro)
    .then((result) => {
      return res.redirect("/movies");
    }).catch((err) => {
      return console.log(err);
    });

  }
};

module.exports = indexController;
