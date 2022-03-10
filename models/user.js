const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create user shema and model
const UserSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    idPerson: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    URLImage: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    },
    // birthDayDate: {
    //     type: Date,
    //     required: true
    // },
    dateCreate: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;