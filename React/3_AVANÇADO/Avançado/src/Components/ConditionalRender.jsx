import React from 'react'

const ConditionalRender = () => {

    const x = 1;
    const name = "João"

  return (
    <div>
        {/* 7 - Render Condicional */}
        <h3>Isso vai ser mostrado?</h3>
        {x > 2 && <p>Se x for maior que dois sim!</p>}
        {/*8 Else */}
        {name === "João"? (
            <div>
                <p>Olá, João!</p>
            </div>
        ):(
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender