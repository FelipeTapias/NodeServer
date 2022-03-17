const bcrypt = require("bcryptjs");

const salt = 10;

const hashingPassword = (password) => {
    return  new Promise((resolve, reject) => {
        bcrypt.hash(password, salt, async(err, palabraSecretaEncriptada) => {
            err ? reject(err) : resolve(palabraSecretaEncriptada);
        });
    });
}

module.exports = {
    hashingPassword: hashingPassword
};