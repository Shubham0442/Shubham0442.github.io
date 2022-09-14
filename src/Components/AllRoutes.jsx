import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Education from '../Pages/Education'
import Home from '../Pages/Home'
import Projects from '../Pages/Projects'
import Skill from '../Pages/Skill'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/education' element={<Education/>}></Route>
            <Route path='/skill' element={<Skill/>}></Route>
            <Route path='/about' element={<About/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes