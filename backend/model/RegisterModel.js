import mongoose from "mongoose";

//datos con los qe se registra

const RegisterSchema = new mongoose.Schema ({
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
const Register = mongoose.model('Register', RegisterSchema);

export default Register;