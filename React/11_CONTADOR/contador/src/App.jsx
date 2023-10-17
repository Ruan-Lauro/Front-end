import './App.css'

import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { CountdownContext } from './context/CountdownContext'

import NewYear from "./assets/thumb-1920-1325398.png"



function App() {

  const {event} = useContext(CountdownContext)

  let eventImage = null

  if(event) eventImage = event.image

  return (
    <>
      <div className='App' style={eventImage?{backgroundImage: `url(${eventImage})`}:{backgroundImage: `url(${NewYear})`}}>
        <div className="container">
            <Outlet/>
        </div>
      </div>
    </>
  )
}

export default App
