import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
    return res.status(401).json({ message: 'Error token de autenticación.' });
    }

    // Verificar y decodificar el token
    try {
    const decoded = jwt.verify(token, 'clave secreta'); 

    // Adjunta info del usuario
    req.user = decoded.user;
    req.user.isAdmin = decoded.user.isAdmin;

    next();
    } catch (error) {
    return res.status(401).json({ message: 'Token inválido o expirado.' });
    }
};
