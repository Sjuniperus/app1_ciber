import express from 'express';
import db from "./database/db.js"
import FormRouter from './routes/FormRoutes.js';
import cors from 'cors';
import AuthRoutes from './routes/AuthRoutes.js';
import { isAdmin } from './middleware/adminMiddleware.js';

const app = express ();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

  
app.use('/form', FormRouter);
app.use('/login', AuthRoutes);
app.use('./dashbord', isAdmin);


app.listen(8000, () => {
    console.log('Servidor iniciado en el puerto 8000'); //puerto donde escucha la app
});


