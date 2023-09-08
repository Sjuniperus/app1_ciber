import express from "express";

export const isAdmin = (req, res, next) => {
    if (!req.user || !req.user.isAdmin) {
      return res.status(403).json({ message: "Acceso no autorizado." });
    }
    next();
  };
  

