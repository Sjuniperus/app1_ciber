import React from 'react';
import '../css/Form.css';


export const Login = () => {
  return (
      <div className="container">
        <div className='box'>
          <form action="POST">
              <h3>Sign in or <a href="/register">Sign up</a></h3>
              <label for="email">Email:</label>
              <input type="email" id="email" placeholder="ejemplo@ejemplo.com" required></input>
              <label for="password">Contraseña:</label>
              <input type="password" id="password" minlength="6" 
              placeholder="Mínimo 8 caracteres" required></input>
              <button className='btn btnPosition'>Login</button> 
          </form>
        </div>
      </div>
      
  )
}

