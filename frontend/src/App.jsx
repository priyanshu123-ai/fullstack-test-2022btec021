import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Contact from './pages/Contact'


import Home from './pages/Home'

import About from './pages/About'

const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path='/' element = {<Home />}/>
       
        <Route path='/about' element = {<About />}/>
        <Route path='/contact' element = {<Contact />}/>
        
      </Routes>
      
    </div>
  )
}

export default App
