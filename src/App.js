import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HeaderNav from './Component/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Logo from './Pages/Logo';
import MobileApps from './Pages/MobileApps';
import SEO from './Pages/SEO';
import SocialMediaMarketing from './Pages/SocialMediaMarketing';
import UIUXDesign from './Pages/UIUXDesign';
import WebDevelopment from './Pages/WebDevelopment';
import Contact from './Pages/Contact';
import Footer from './Component/Footer'


export default function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/logo' element={<Logo />} />
            <Route path='/mobile-apps' element={<MobileApps />} />
            <Route path='/seo' element={<SEO />} />
            <Route path='/social-media-marketing' element={<SocialMediaMarketing />} />
            <Route path='/ui-ux-design' element={<UIUXDesign />} />
            <Route path='/web-development' element={<WebDevelopment />} />
            <Route path='/contact-us' element={<Contact />} />
          </Routes>   
          <Footer/>       
    </>
  )
}
