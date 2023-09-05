import Register from "../model/RegisterModel.js";

//CRUD

export const create = async (req, res) => {
    const {Name, Lastname, UserName, Email, Password} = req.body
    if (!Name || !Lastname || !UserName || !Email || !Password){
        return res.status(400).json ({message: "Todos los campos son requerios"})
    } try {
        const register = await Resgiter.create(req.body)
        return res.status(201).json(register)

    } catch (error) {
        return res.status(400).json ({message: error.message})
    }
}

export const update = async (req, req) => {
    const {Name, Lastname, UserName, Password} = req.body
    
}