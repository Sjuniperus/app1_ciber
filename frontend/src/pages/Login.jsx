import { useState } from "react";
import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "../css/Form.css";

export const Login = () => {
  return (
    <div className="container">
      <div className="box">
        <form action="POST">
          <h3>
            Sign in or <a href="/register">Sign up</a>
          </h3>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="ejemplo@ejemplo.com"
            required
          ></input>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            minLength="6"
            placeholder="Mínimo 8 caracteres"
            required
          ></input>
          <button onClick={handleSubmit} className="btn btnPosition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
