const CarDetails = ({marca, km, color}) => {
  return (
    <div>
        <h3>Detalhes do carro:</h3>
        <ul>
            <li>Marca: {marca}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails