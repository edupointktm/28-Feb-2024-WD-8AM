import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Productdetails from './Productdetails'

function Section() {
  return (
   <>
   
   
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/productdetails/:pid" element={<Productdetails/>}/>
   </Routes>
   </>
  )
}

export default Section