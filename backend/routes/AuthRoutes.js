import express from 'express';
import { login, /* showLoginPage  */, registerUser } from '../controller/AuthController.js'


const AuthRoutes = express.Router();

/* AuthRoutes.get('/login', showLoginPage ); */
AuthRoutes.post('/login', login);
AuthRoutes.post('/register', registerUser);

export default AuthRoutes;
