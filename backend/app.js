import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import db from "./database/db.js"
import FormRouter from './routes/FormRoutes.js';
import cors from 'cors';
import AuthRoutes from './routes/AuthRoutes.js';
import UserRoutes from './routes/UserRoutes.js';
/* import AdminRoutes from './routes/AdminRoutes.js'; */


const app = express ();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

  
app.use('/form', FormRouter);
app.use('/login', AuthRoutes);
app.use('/user', UserRoutes);


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("Servidor iniciado en el puerto ${port}"); //puerto donde escucha la app
});


