
export const isAdmin = (req, res, next) => {
    if (!req.user || !req.isAdmin) {
      return res.status(403).json({ message: "Acceso no autorizado." });
    }
    next();
  };
  

