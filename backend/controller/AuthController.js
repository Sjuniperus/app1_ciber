import Auth from "../model/AuthModel.js";
/* import { render } from 'loginPage';*/
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


/*export const showLoginPage = (req, res) => {
  res.render('loginPage');
};
 */
export const login = async (req, res) => {
    const {Email, Password} = req.body;
   
    if (!Email || !Password){
        return res.status(400).json ({message: "Todos los campos son requeridos"});
    }try {
        const user = await Auth.findOne({ Email});
        if (!user){
            return res.status(401).json({ message: 'Credenciales incorrectas' });
          }

        const passwordMatch = await bcryptjs.compare(Password, user.Password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
          }
        const jwtsecret = process.env.JWT_SECRET;
        const token = jwt.sign({ userId: newUser._id}, jwtsecret|| 'defaultsecret', { expiresIn: '1h' });//defaultsecret es por si no encuentra el .env

        return res.status(200).json({ message: 'Usuario registrado con éxito.', token });
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};
