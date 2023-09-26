import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navigation } from './component/Navigation.jsx'
import { Login } from './pages/Login.jsx'
import { Dashbord } from './pages/Dashbord.jsx'
import { Register } from './pages/Register.jsx'
import { ContactForm } from './pages/ContactForm.jsx'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path ='/' element= {<Navigation />}>
          
            <Route index element= {<Login />}></Route>
            <Route path='/register' element= {<Register />}></Route>
            <Route path='/form' element= {<ContactForm />}></Route>
            <Route path='/dashbord' element= {<Dashbord />}></Route>

{/*             <Route path='*' element= {<Navigate to ='/login' />}></Route>
 */}        </Route>
    </Routes>
  )}
