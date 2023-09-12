import express from 'express';
import { login, /* showLoginPage  */} from '../controller/AuthController.js'


const AuthRoutes = express.Router();

/* AuthRoutes.get('/login', showLoginPage ); */
AuthRoutes.post('/login', login);


export default AuthRoutes;
