// Importamos paquete
const bcrypt = require("bcryptjs");
// Entre más rondas, mejor protección, pero más consumo de recursos. 10 está bien
const rondasDeSal = 10;

function hashingPassword(password) {

    bcrypt.hash(password, rondasDeSal, (err, palabraSecretaEncriptada) => {
        if (err) {
            console.log("Error hasheando:", err);
            return err;
        } else {
            console.log("Password encriptada: " + palabraSecretaEncriptada);
            return  palabraSecretaEncriptada;
        }
    });
}

module.exports = hashingPassword;