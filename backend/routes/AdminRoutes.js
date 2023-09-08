import express from 'express';
import { create, update, deleteUser  } from "../controller/UserController.js";
import { isAdmin } from "../middleware/isAdmin.js";

const AdminRoutes = express.Router();

AdminRoutes.get('./create', create);
AdminRoutes.post('./create', create);
AdminRoutes.get('./update', update);
AdminRoutes.post('./update', update);
AdminRoutes.get('./delete', deleteUser);
AdminRoutes.pot('./delete', deleteUser);




