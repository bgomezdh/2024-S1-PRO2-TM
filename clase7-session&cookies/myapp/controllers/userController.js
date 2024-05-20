
const db = require("../database/models");
const bcrypt = require("bcryptjs");

const userController = {
    register: (req, res)=>{
        return res.render("registerUser")
    },
    login: (req, res)=>{
        return res.render("login")
    },
    store: (req, res)=>{
        let form = req.body;

        let user = {
            name: form.name,
            email: form.email,
            password: bcrypt.hashSync(form.password, 10)
        }

        db.User.create(user)
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

            if (result == null) return res.send("No existe el mail " +  form.email)
            

            let check = bcrypt.compareSync(form.password, result.password);
            if (check) {
                req.session.user = result;

                /* que lo guarde en cookie si el usuario lo tildo */
                if (form.rememberme != undefined) {
                    res.cookie("userId", result.id, {maxAge: 1000 * 60 * 15});
                }
                return res.redirect("/movies");
            } else {
                return res.send("La contraseña es incorrecta")
            }
            
           

        }).catch((err) => {
            return console.log(err);
        });


    },
    logout: function(req, res) {
        req.session.destroy();
        res.clearCookie("userId")
        return res.redirect("/")
    }
}

module.exports = userController;