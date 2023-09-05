import mongoose from "mongoose";

const FormLockSchema = new mongoose.Schema({
    Email: {
        type: String,
        required:true
    },
    Name: {
        type: String,
        required:true
    },
    Subject: {type: String},
    Message: {
        type: String,
        required:true}
});

const FormLock = mongoose.model('Form', FormLockSchema);

export default FormLock;