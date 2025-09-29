import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Section from './components/Section/Section'
import Client from './components/Client/Client'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Section/>
      <Client/>
      <Footer/>
    </>
  )
}

export default App
