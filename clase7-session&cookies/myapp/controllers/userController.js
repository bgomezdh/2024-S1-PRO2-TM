
const db = require("../database/models");

const userController = {
    register: (req, res)=>{
        return res.render("registerUser")
    },
    login: (req, res)=>{
        return res.render("login")
    },
    store: (req, res)=>{
        let form = req.body;

        db.User.create(form)
        .then((result) => {
            return res.redirect("/users/login");
        }).catch((err) => {
            return console.log(err);
        });

       
    },
    loginUser: (req, res)=>{
        let form = req.body;

        let filtro = {
            where: [{email: form.email}]
        };

        db.User.findOne(filtro)
        .then((result) => {
            return res.send(result);

        }).catch((err) => {
            return console.log(err);
        });


    },
}

module.exports = userController;