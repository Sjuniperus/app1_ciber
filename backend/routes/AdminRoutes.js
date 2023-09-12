import express from 'express';
import { isAdmin } from "../middleware/adminMiddleware.js";
import { updateUserByAdmin, deleteUserByAdmin } from '../controller/AdminController.js';

const AdminRoutes = express.Router();

AdminRoutes.put('/user/:id', isAdmin, updateUserByAdmin);

AdminRoutes.delete('/user/:id', isAdmin, deleteUserByAdmin);

export default AdminRoutes;



