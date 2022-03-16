// Importamos paquete
const bcrypt = require("bcryptjs");
// Entre más rondas, mejor protección, pero más consumo de recursos. 10 está bien
const rondasDeSal = 10;

function hashingPassword(password) {
    return  new Promise((resolve, reject) => {
        bcrypt.hash(password, rondasDeSal, async(err, palabraSecretaEncriptada) => {
            err ? reject(err) : resolve(palabraSecretaEncriptada);
        });
    });
}

module.exports = {
    hashingPassword: hashingPassword
};