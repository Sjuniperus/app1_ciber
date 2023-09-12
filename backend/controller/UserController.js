import User from "../model/UserModel.js";


export const createUser = async (req, res) => {
    const {Name, Lastname, UserName, Email, Password} = req.body
    if (!Name || !Lastname || !UserName || !Email || !Password){
        return res.status(400).json ({message: "Todos los campos son requerios."})
    } try {
        const newuser = await User.create(req.body)
        return res.status(201).json(newuser)

    } catch (error) {
        return res.status(400).json ({message: error.message})
    }
}

/* export const getUsersProfile = async  (req, res) => {
    if ()
} */
 