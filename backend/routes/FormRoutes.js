import express from 'express';
import { createForm, deleteForm, updateForm, getForms, getFormid } from '../controller/FormController.js';

const FormRouter = express.Router();

FormRouter.get('/form', getForms)
FormRouter.get('/:id',getFormid )
FormRouter.post ('/create-form', createForm )
FormRouter.put ('/:id', updateForm )
FormRouter.delete ('/:id', deleteForm)

export default FormRouter