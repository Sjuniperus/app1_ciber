import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
//datos con los qe se registra

const UserSchema = new mongoose.Schema ({
    Name: {
        type: String,
        required:true,
        trim: true
    },
    Lastname: {
        type: String,
        required:true,
        trim: true
    }, 
    UserName: {
        type: String,
        required:true,
        trim:true, //quita los espacios en blanco
    },
    Role: {
        type: String,
        required: true,
        enum:['admin', 'user'],
        default: "user" //por defecto le da este rol
    },
    Email: {
        type: String,
        required:true,
        trim:true,
        unique:true
    },
    Password: {
        type: String,
        required:true
    },

})

//const que interactua con la base de datos
const User = mongoose.model('Users', UserSchema); 

export default User;