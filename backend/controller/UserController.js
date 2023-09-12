import User from '../model/UserModel.js';
import bcryptjs from 'bcryptjs';
import JWTSECRET from '.env';

export const registerUser = async (req, res) => {
  const { Name, Lastname, UserName, Email, Password } = req.body;
  if (!Name || !Lastname || !UserName || !Email || !Password){
    return res.status(400).json ({message: "Todos los campos son requerios."})
  }try {
    const existingUser = await User.findOne({ Email });// Verifica email en uso

    if (existingUser) {
      return res.status(400).json({ message: 'El correo electrónico en uso.' });
    }
    const hashedPassword = await bcryptjs.hash(Password, 10);

    //Nuevo usuario en bdd
    const newUser = new User({
      Name,
      Lastname,
      UserName,
      Email,
      Password: hashedPassword,
    });

    await newUser.save();
    
    //crear token
    const token = jwt.sign({ userId: newUser._id}, JWTSECRET || 'defaultsecret', { expiresIn: '1h' });//defaultsecret es por si no encuentra el .env

    return res.status(201).json({ message: 'Usuario registrado con éxito.', token });
  } catch (error) {
    return res.status(500).json({ message: 'Error en el registro.' });
  }
};

export const getUsersProfile = async  (req, res) => {
    try {
        const usersProfile = await User.find()
        if (!usersProfile || usersProfile.length === 0) {
            return res.status(404).json({ message: 'No se encontraron usuarios.' });
          }
        res.status(200).json(usersProfile)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
 