import mongoose from "mongoose";

//qué datos voy a guardar
const AuthSchema = new mongoose.Schema({
    Email: {
        type: String,
        required:true,
        trim:true, //quita los espacios en blanco
    },
    Password: {
        type: String,
        required:true
    },
});

//const que interactua con la base de datos
const Auth = mongoose.model('User', AuthSchema);

export default Auth;