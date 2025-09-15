import React from 'react'
import Navbar from './companents/Navbar'
import Byuti from './companents/Byuti'
import Section from './companents/Section'
import Compare from './companents/Compare'
import SalonDesign from './companents/SalonDesign'
import Kworking from './companents/Kworking'
import { Route, Routes } from 'react-router-dom'
import Nas from './pages/Nas'
import Narx from './pages/Narx'
import Bron from './pages/Bron'
import Contact from './pages/Contact'
import Servis from './companents/Servis'
import Faq from './companents/Faq'
import ContactCard from './companents/ContactCard'
import Footer from './companents/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
<Routes>
  <Route path="/" element={
      <>
      <Byuti/>
      <Section/>
      <Compare/>
      <SalonDesign/>
      <Kworking/>
      <Servis/>
      <Faq/>
      <ContactCard/>
      <Footer/>

      </>
    }
  />
  <Route path="/nas" element={<Nas/>} />
  <Route path="/narx" element={<Narx/>} />
  <Route path="/bron" element={<Bron/>} />
  <Route path="/con" element={<Contact/>} />
 
</Routes>
    </div>
  )
}

export default App

