import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import '../css/Form.css';


export const Login = () => {
  const {values, setValues} = useState({
    email: "",
    password:""
  });

  const {email, password} = values;

  const handleChange = name => (e) =>{
    /* console.log(e.target.value); */
    setValues({...values, [name]:e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const signuser = await axios.post('/signup', values); // No pongo todo el http porque uso proxy en back
      console.log(signuser);

    if (signuser.data.success === true)
      setValues({email: "", password: ""});//limpia el formulario

     
   } catch (error) {
    console.log()
   }
  return (
      <div className="container">
        <div className='box'>
          <form action="POST">
              <h3>Sign in or <a href="/register">Sign up</a></h3>
              <label for="email">Email:</label>
              <input onChange={ handleChange("email") } type="email" id="email" placeholder="ejemplo@ejemplo.com" 
              required value={email }></input>
              <label for="password">Contraseña:</label>
              <input onChange={ handleChange("passwod") } type="password" id="password" minlength="6" 
              placeholder="Mínimo 8 caracteres" required value={ password }></input>
              <button onClick={ handleSubmit } className='btn btnPosition'>Login</button> 
          </form>
        </div>
      </div>
      
  )
}
}
