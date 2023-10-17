//4 - Template

const TemplateExpression = ()=>{
    const name = "Matheus"
    const data = {
        age: 31,
        job: "Programador"
    }
    return(
        <div>
        <p>A soma é {2+2}</p>
        <h3>Bem Vindo {name}</h3>
        <h4>Idade: {data.age} e Trabalha como: {data.job}</h4>
        </div>

    )
}

export default TemplateExpression