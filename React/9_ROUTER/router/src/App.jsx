import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Outlet } from 'react-router-dom'

//5 - link entre páginas
import Navbar from './components/Navbar'
// Seach params
import SeachForm from './components/SeachForm'

function App() {

  return (

    <div className="App">
      <Navbar/>
      <SeachForm/>
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default App
