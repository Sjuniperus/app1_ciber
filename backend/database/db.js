import mongoose from 'mongoose';
import { MONGODB_URI } from '../.env';

const url= MONGODB_URI;

try {
    mongoose.connect(url, {
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
