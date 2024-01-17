import React from 'react'
import {Router,Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
const routes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default routes