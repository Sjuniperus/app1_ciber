import express from 'express';
import { getUsersProfile, registerUser } from '../controller/UserController.js';

const UserRoutes = express.Router();

UserRoutes.post('/create', registerUser);

UserRoutes.get('/profile', getUsersProfile);

export default UserRoutes;
