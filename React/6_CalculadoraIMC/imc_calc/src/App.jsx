import {data} from "./data/data.js";

import { useState } from 'react'

import ImcCalc from './components/ImcCalc'
import './App.css'
import ImcTable from "./components/ImcTable"

function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault()

    const heightFloat = +height.replace(",", ".")
    const weightFloat = +weight.replace(",", ".")

    const imcResult = (weightFloat/(heightFloat*heightFloat)).toFixed(1)

    if(!weight || !height) return

    setImc(imcResult)

    data.forEach((item) =>{
      if(imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info)
        setinfoClass(item.infoClass)
      }
    })

    if(!info) return
  }

  const resetCalc = (e) => {
    e.preventDefault()

    setImc("")
    setInfo("")
    setinfoClass("")
  }

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setinfoClass] = useState("")

  return (
    <>
      <div className='container'>
        {!imc ? 
        (
          <ImcCalc  calcImc={calcImc}/>
        ):
        (
          <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>
        )}
      </div>
    </>
  )
}

export default App
