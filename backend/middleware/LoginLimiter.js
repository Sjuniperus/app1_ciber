import rateLimit from 'express-rate-limit';
import Redis from'ioredis';


const redis = new Redis();


const loginRateLimit = rateLimit({
  max: 2, 
  windowMs: 1000 * 60 * 10, 
  message: 'Too Many Login Attempts',
  handler: (req, res) => {
    res.status(429).send('Too Many Login Attempts');
  },
});

// Define el middleware LoginLimiter que utiliza el límite de velocidad
export const LoginLimiter = async (req, res, next) => {
  try {
    // Obtén la dirección IP del cliente desde req.ip o req.connection.remoteAddress
    const clientIP = req.ip || req.connection.remoteAddress;

    // Crea una clave única basada en la dirección IP del cliente
    const redisKey = `login_attempts:${clientIP}`;

    // Obtiene el número actual de intentos de inicio de sesión fallidos para esta IP
    const attempts = await redis.get(redisKey);

    // Si no hay intentos anteriores, establece el valor en 1
    if (!attempts) {
      await redis.set(redisKey, 1, 'EX', 600); // Expira en 10 minutos (600 segundos)
    } else {
      // Si ya hay intentos anteriores, incrementa el contador
      const newAttempts = parseInt(attempts, 10) + 1;

      // Si se supera el límite, llama al middleware de límite de velocidad
      if (newAttempts > 2) {
        return loginRateLimit(req, res);
      } else {
        // Actualiza el valor en Redis y actualiza el tiempo de expiración
        await redis.set(redisKey, newAttempts, 'EX', 600);
      }
    }

    // Continúa con el siguiente middleware o controlador de ruta
    next();
  } catch (error) {
    console.error('Error in LoginLimiter middleware:', error);
    next();
  }
};

