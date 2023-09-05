import express from 'express';
import { login } from '../controller/AuthCotroller.js'

const AuthRoutes = express.Router();

AuthRoutes.post('/login', login);

export default AuthRoutes;
