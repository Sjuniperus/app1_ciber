import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navigation } from './component/Navigation'
import { Login } from './pages/login/Login'
import { Dashbord } from './pages/dashbord/Dashbord'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path ='/' element= {<Navigation />}>
            <Route path='/login' element= {<Login />}></Route>
            <Route path='/register' element= {<Register />}></Route>
            <Route path='/dashbord' element= {<Dashbord />}></Route>

            <Route path='*' element= {<Navigate to='/' />}></Route>
        </Route>
    </Routes>
  )}
