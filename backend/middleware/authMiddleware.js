import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
    //Obtiene el token
    const token = req.header('Authorization');

    if (!token) {
    return res.status(401).json({ message: 'No se proporcionó un token de autenticación.' });
    }

    // Verificar y decodificar el token
    try {
    const decoded = jwt.verify(token, 'tu_secreto'); // Reemplaza 'tu_secreto' con tu clave secreta real

    // Adjuntar la información del usuario decodificado a la solicitud para su uso posterior
    req.user = decoded.user;

    // Continuar con la siguiente función en la ruta
    next();
     } catch (error) {
    return res.status(401).json({ message: 'Token inválido o expirado.' });
    }
};
