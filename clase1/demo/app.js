let nombre = "brian";

const email = "bgomez@dh.com";


/* ------------- obj literales-------------- */
const usuario = {
    nombre: "Juan",
    apellido: "Andrade",
    edad: 43,
    login: function(nombreUsuario, contrasennaUsuario) {
        return "Estas ingresando con el usuario " + nombreUsuario;
    }
};

console.log(usuario.login("brian123","**********"));