import { useState, useEffect } from 'react';
import './App.css'
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])

  //4 - custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url)

  //useEffect(()=>{
    
    //async function getData(){

      //const res = await fetch(url);

      //const data = await res.json()

      //setProducts(data)

    //}

    //getData()
  //}, []);

  //2 Envio de dados

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit =  async (e) =>{
    e.preventDefault()

    const product = {
      name, 
      price
    };

    //5 - refatorando POST
    httpConfig(product, "POST")

    //const res = await fetch(url, {
      //method: "POST",
      //headers: {
       // "Content-Type": "application/json"
      //},
      //body: JSON.stringify(product)
    //});

    // 3 - carregamento dinâmico
    //const addedProduct = await res.json()

    //setProducts((prevProducts) => [...//prevProducts, addedProduct])
  };

  return (
    <>
      <div>
        <h1>Olá</h1>
        {/**6 - loading */}
        {loading && <p>Carregando...</p>}
        {/*8 - tratando erro */}
        {erro && <p>{error}</p>}
        <ul>
          { items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
        {/*2 - Eviando os dados */}
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome</span>
              <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </label>

            <label>
              <span>Preço</span>
              <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            </label>
            {/*<input type="submit" value="Enviar"/> */}
            {/*7 - loading post */}
            {loading && <input type='submit' disabled value="Aguarde"/>}
            {!loading && <input type='submit' value="Criar"/>}
          </form>
        </div>
      </div>
    </>
  )
}

export default App
