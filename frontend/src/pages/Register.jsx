import React from 'react'
import '../css/Form.css'

export const Register = () => {
  return (
    <div className="container">
      <div className='register'>
          <form action="POST">
              <h3>Sign up</h3>
              <label for="name">Nombre:</label>
              <input type="text" id="name" minlength="3" placeholder="Nombre" required/>
              <label for="surname">Apellidos:</label>
              <input type="text" id="surname" minlength="3" placeholder="Apellidos" required/>
              <label for="username">Username:</label>
              <input type="text" id="username" minlength="3" placeholder="Username" required/>
              <label for="email">Email:</label>
              <input type="email" id="email" placeholder="ejemplo@ejemplo.com" required/>
              <label for="password">Contraseña:</label>
              <input type="password" id="password" minlength="6" 
              placeholder="Mínimo 8 caracteres" required/>
              <label for="passwconfirm">Confirmar contraseña:</label>
              <input type="password" id="passwconfirm" minlength="6" 
              placeholder="Mínimo 8 caracteres" required/>
              <button className='btn btnPosition'>Login</button> 
          </form>
      </div>
    </div>
  )
}

