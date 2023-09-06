import mongoose from "mongoose";

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
        default: "user" //por defecto le da este rol
    },
    Email: {
        type: String,
        required:true,
        trim:true,
        inuque:true
    },
    Password: {
        type: String,
        required:true
    },

})

//const que interactua con la base de datos
const User = mongoose.model('User', UserSchema);

export default User;