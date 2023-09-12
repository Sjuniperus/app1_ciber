import Auth from "../model/AuthModel.js";
/* import { render } from 'loginPage';

export const showLoginPage = (req, res) => {
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

        const passwordMatch = await bcrypt.compare(Password, user.Password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
          }
        
        const token = jwt.sign({ userId: user._id }, 'clave_secreta', { expiresIn: '1h' });
        return res.status(200).json({ token });
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};
