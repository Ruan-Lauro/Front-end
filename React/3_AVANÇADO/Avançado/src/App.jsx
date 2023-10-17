import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Imagem em assents
import ross from "./assets/ROSS[1].jpg";
import Data from './Components/Data';
import ListRender from './Components/ListRender';
import ConditionalRender from './Components/ConditionalRender';
import ShowUserName from './Components/ShowUserName';
import CarDetails from './Components/CarDetails';
import Fragments from './Components/Fragments';
import Container from './Components/Container';
import ExecuteFunction from './Components/ExecuteFunction';
import Message from './Components/Message';
import ChangeMessage from './Components/ChangeMessage';

const cars = [
  {id: 1, marca: "Ferrari", color: "Azul", km: 0},
  {id: 2, marca: "Fiat", color: "Vermelho", km: 0},
  {id: 3, marca: "Honda", color: "Preto", km: 0},
  {id: 4, marca: "Mercedes Bens", color: "Rosa", km: 0}
]

function App() {
  const [count, setCount] = useState(0)

  {/*14 - Props com função */}
  function showMenssage(){
    console.log("Evento do componente pai")
  }

  {/*15 - State lift */}
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      <div className='App' style={{paddingBottom: "500px"}}>
        <h1>Avançando no React</h1>
        <h2>Com public</h2>
        {/* Imagem em public */}
        <img src="/ROSS[1].jpg" alt="Ross"/>
        <h2>Com Assets</h2>
        {/*Imagem de assents*/}
        <img src={ross} alt="Ross" />
        {/*hooks usestate */}
        <Data/>
        {/*List renderização*/}
        <ListRender/>
        {/*7- Renderização condicional */}
        <ConditionalRender/>
        {/*8 - Props */}
        <ShowUserName name = "Ruan"/>
        {/*9 - Desestruturando props */}
        <CarDetails marca = "Audi" km = {999} color= "Vermelha"/>
        {/*10 - Reaproveitamento de props */}
        <CarDetails marca = "Gol" km = {9934} color= "Branca"/>
        <CarDetails marca="VW" km = {0} color= "Azul"/>
        {/*11 - Renderização de lista */}
        <h2>------------------------------</h2>
        {cars.map((car) => (
          <CarDetails key={car.id} marca = {car.marca} color={car.color} km={car.km}/>
        ))}
        {/*12 - Fragments*/}
        <Fragments/>
        {/*13 - Children props */}
        <Container></Container>
        {/*14 - Props Function */}
          <ExecuteFunction myfunction={showMenssage} />
         {/*15 - State lift */}
         <Message msg={message}/>
         <ChangeMessage handleMessage={handleMessage}/>
      </div>
    </>
  )
}

export default App
