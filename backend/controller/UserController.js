import User from "../model/UserModel.js";

//CRUD


/* export const getUsers = async  (req, res) => {
    if ()
} */
 
export const create = async (req, res) => {
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

export const update = async (req, res) => {
    const {Name, Lastname, UserName, Password} = req.body
    if (!Name || !Lastname || !UserName || !Email || !Password){
        return res.status(400).json ({message: "Error al intentar actualizar."})
    } try {
        const id = req.params.id
        const updateUser = await User.findById(id)
        if (!updateUser) {
            return res.status(404).json({ message: "Usuario no encontrado." });
        }
        if (updateUser)
            updateUser.Lastname = req.body.Lastname;
            updateUser.UserName = req.body.UserName;
            updateUser.Name = req.body.Name;
            updateUser.Email = req.body.Email;
            await updateUser.save();
        
            return res.status(201).json(updateUser)
    } catch (error) {
        return res.status(400).json ({message: error.message})

    }

}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const deleteUser = await findByIdAndDelete(id);
        if (!deleteUser){
            res.status(404).json({ message: "No se encontró el usuario con el id especificado." });
         }
         return res.status(200).json ({message: "Usuario borrado corretamente"});
    } catch (error) {
        return res.status(400).json ({message: error.message}) 
    }
}  