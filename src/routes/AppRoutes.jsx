import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../page/Home'
import Navbar from '../components/Navbar'
import Project from '../page/Project'
import Sponser from '../components/Sponser'
import Footer from '../components/Footers'
import NotFound from '../page/์NotFound'
import ArtPro from '../page/ArtPro'
import ProC from '../page/ProC'
import MultiD from '../page/MultiD'
import { Details } from '../page/Details'




export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Projects' element={<Project/>} />
        <Route path='/Art-graphics' element={<ArtPro/>} />
        <Route path='/Product-craft' element={<ProC/>} />
        <Route path='/Multimedia' element={<MultiD/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='*' element={<NotFound/>} />
    </Routes>
    <Sponser/>
    <Footer/>
    </BrowserRouter>
  )
}
