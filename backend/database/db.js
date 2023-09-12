import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongodburi = process.env.MONGODB_URI;

try {
    mongoose.connect(mongodburi, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(() =>{
        console.log('¡Conectada a MongoDB!')
    }).catch((error) => {
        console.error('¡Error al conectar a MongoDB!', error)
    });
} catch (error) {
    console.error('¡Error al conectar a MongoDB!', error)
    procces.exit(1)
}

export default mongoose.connection;
