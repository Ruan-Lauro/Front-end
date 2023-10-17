import React from 'react'

const Events = () => {

    const handleClick = (e)=>{
        console.log("Executou");
        console.log(e);
    };

    //8 - Função de renderização
    const renderSomething = (x)=>{
        if(x){
            return <h1>Rederizando isso!</h1>
        }else{
            return <h1>Renderizando outra coisa</h1>
        }
    };

  return (
    <div>
        <div>
            <button onClick={console.log("Clicou")}>Clique Aqui!</button>
        </div>
        {/* Outra forma */}
        <div>
            <button onClick={handleClick}>Click para o teste</button>
        </div>
        {/*8 - Renderização*/}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events