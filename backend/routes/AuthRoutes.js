import express from 'express';
import { login, /* showLoginPage  */} from '../controller/AuthController.js'
import rateLimit from 'express-rate-limit';
/* import { rateLimiter } from '../middleware/LoginLimiter.js';
 */
const AuthRoutes = express.Router();
//2 intentos por cada 20 minutos
const loginLimiter = rateLimit({ max: 2, windowMS: 1000 * 60 * 20 })
/* AuthRoutes.get('/login', showLoginPage ); */
AuthRoutes.post('/login', loginLimiter, rateLimit, login);

export default AuthRoutes;
