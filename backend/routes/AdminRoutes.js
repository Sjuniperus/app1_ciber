import express from 'express';
import { create, update, deleteUser  } from "../controller/UserController.js";
import { isAdmin } from "../middleware/adminMiddleware.js";

const AdminRoutes = express.Router();

AdminRoutes.get('./dashbord/create', isAdmin, create);
AdminRoutes.post('./dashbord/create', isAdmin, create);
AdminRoutes.get('./dashbord/update', isAdmin, update);
AdminRoutes.put('./dashbord/update', isAdmin, update);
AdminRoutes.get('./dashbord/delete', isAdmin, deleteUser);
AdminRoutes.delete('./dashbord/delete', isAdmin, deleteUser);




