import React from 'react'
import { useState } from 'react'

const Data = () => {
    let SomeData = 10;
    const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
        <div>
            <p>Valor: {SomeData}</p>
            <button onClick={() => (SomeData = 15)}>Mudar</button>
        </div>
        <div>
            <p>Valor: {anotherNumber}</p>
            <button onClick={()=>setAnotherNumber(30)}>Mudar número</button>
        </div>
    </div>
  )
}

export default Data