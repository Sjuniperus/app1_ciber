import express from 'express';
import { createUser, getUserProfile } from '../controller/UserController.js';

const UserRoutes = express.Router();

UserRoutes.post('/create', createUser);

UserRoutes.get('/profile', getUserProfile);

export default UserRoutes;
