import Auth from "../model/AuthModel.js";


//CRUD

export const login = async (req, res) => {
    const {Email, Password} = req.body
    if (!Email || !Password){
        return res.status(400).json ({message: "Todos los campos son requeridos"});
    }try {
        const auth = await Auth.create(req.body)
        res.status(201).json(auth)

    } catch (error) {
        res.status(400).json({message: error.message})
    }
};
