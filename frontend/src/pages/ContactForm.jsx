import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import '../css/Form.css'

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    title: '',
    msg: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`handleChange called with name: ${name} and value: ${value}`);
    setFormData({
      ...formData,
      [name] : value
    
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/create-form', formData);
      alert('Formulario enviado exitosamente');
      return     
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Error al enviar el formulario');
    }
  };

  

  return (
    <div className="container">
      <div className='contact'>
          <form onSubmit={handleSubmit}>
              <h3>Contacta con nosotras</h3>
              <input type="hidden" name="firstHidden" value="valueHiddenInput" />
              <input type="hidden" name="secondHidden" value="valueHiddenInput" />
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
              placeholder="ejemplo@ejemplo.com" required></input>
              <label htmlFor="name">Nombre:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange}
              placeholder="Escriba aquí su nombre." required></input>
              <label htmlFor="title">Titulo:</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange}
              placeholder="Mínimo 8 caracteres" required></input>
              <label htmlFor="msg">Mensaje:</label>
              <textarea type="text" name="msg" rows="10" cols="50" value={formData.msg} onChange={handleChange}
              placeholder="Escriba aquí su mensaje." required></textarea>
              <button className='btn btnPosition'>Login</button> 
          </form>
      </div>
    </div>

  )
}

