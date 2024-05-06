import React from 'react'

import Our_team from './Our_team'
import {  Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function Section() {
    return (
        <>
        
           
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/our_team' element={<Our_team/>}></Route>
                </Routes>

            
        </>
    )
}

export default Section