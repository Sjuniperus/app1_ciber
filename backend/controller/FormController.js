import FormLock from "../model/FormModel.js";
import { check, validationResult } from 'express-validator';


//Crud (crear, leer, actulizar, borrar)
 
//crear
const xss = require('xss');
const filter = new xss.Filter();

export const createForm = async (req, res) =>{

    const { Email, Name, Subject, Message } = req.body;
    

    //validación: bail() frena validación si no se cumple alguna regla; trim(), quita espacios en blanco; escape(), convierte caracteres HTML y JS,(<, >, y ") en entidades de HTML -->texto plano [XSS] 
    const validationRules = [
        check('Email').isEmail().withMessage('El campo Email debe ser una dirección de correo válida').bail().trim().escape(),
        check('Name').isAlpha('es-ES', { ignore: ' ' }).withMessage('El campo Name no válido').bail().trim().escape(),
        check('Subject').matches(/^[a-zA-Z0-9\s\-]+$/).withMessage('El campo Subject no válido').bail().trim().escape(),
        check('Message').matches(/^[a-zA-Z0-9\s\-]+$/).withMessage('El campo message no válido').bail().trim().escape(),
    ];
    //espera a que todas las validaciones se ejecuten
    await Promise.all(validationRules.map(validation => validation.run(req)));
    
    // Sanitizar
    const sanitizedEmail = filter.process(Email);
    const sanitizedName = filter.process(Name);
    const sanitizedSubject = filter.process(Subject);
    const sanitizedMessage = filter.process(Message);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const form = await FormLock.create({
            Email: sanitizedEmail,
            Name: sanitizedName,
            Subject: sanitizedSubject,
            Message: sanitizedMessage})
        
        res.status(201).json(form)
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

//traer un formulario con su id
export const getFormid = async (req,res) =>{
    try {
        const id = req.params.id 
        const form =await FormLock.findById(id)
        res.status(200).json(form)
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//todos los formularios.
export const getForms = async (req,res) =>{
    try {
        const form =await FormLock.find()
        res.status(200).json(form)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//Actualizar el formulario.
export const updateForm = async (req, res) => {
    const {Email, Name, Subject, Message} = req.body

    if(!Email && !Name && !Subject && !Message ) {
        return res.status(400).json({ message: "Debe proporcionar al menos un campo para actualizar." });
    }
    try {
        const id = req.params.id
        const form = await FormLock.findByIdAndUpdate({_id: id}, req.body, {new:true});
        if (!form){
            return res.status(404).json({ message: "No se encontró el fromulario con el id especificado." });
        }
        res.status(200).json(form);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//borrar
export const deleteForm = async (req, res) =>{

    const {Email, Name, Subject, Message} = req.body

    if(!Email && !Name && !Subject && !Message ) {
        return res.status(400).json({ message: "Debe proporcionar al menos un campo para actualizar." });
    }
    try {
        const id = req.params.id
        const form = await FormLock.deleteOne({_id: id});
         if (form.deletedCount === 0) {
            res.status(404).json({ message: "No se encontró el fromulario con el id especificado." });
         }
         res.status(200).json({ message: "¡Formulario se ha eliminado correctamente!" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}