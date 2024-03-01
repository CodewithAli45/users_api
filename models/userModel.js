const mongoose = require('mongoose');

const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const userSchema = new mongoose.Schema({

    fullName: {type: String,  required: true},
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true, 
        lowercase: true,
        validate: {
            validator: function(email){
                return emailRegex.test(email);
            },
            message: "Invalid email format. Please enter a valid email address."
        }
    },
    address : {type: String},
    phone: {type: String},
    password: {type: String, required: true, minlength: 3},
    confirmPassword: {type: String, required: true},

}, {timeseries: true});


const User = mongoose.model('user', userSchema);

module.exports = User;