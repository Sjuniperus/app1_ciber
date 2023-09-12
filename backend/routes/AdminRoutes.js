import express from 'express';
import { create, update, deleteUser  } from "../controller/UserController.js";
import { isAdmin } from "../middleware/adminMiddleware.js";
import express from 'express';
import { updateUserByAdmin, deleteUserByAdmin } from '../controller/AdminController.js';

const AdminRoutes = express.Router();

AdminRoutes.put('/user/:id', isAdmin, updateUserByAdmin);

AdminRoutes.delete('/user/:id', isAdmin, deleteUserByAdmin);

export default AdminRoutes;



