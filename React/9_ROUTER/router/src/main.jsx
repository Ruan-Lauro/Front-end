import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contact from './routes/Contact.jsx'
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"
import ErrorPage from './routes/ErrorPage.jsx'

//8 - nested route
import Infor from './routes/Infor.jsx'

//3 - componente base
import Home from './routes/Home.jsx'
import Product from './routes/Product.jsx'

//9 - Search
import Search from './routes/Search.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    //3 - componente base
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      //7 - rota dinamica
      {
        path: "products/:id",
        element: <Product/>
      },

      //8- rota dinâmica
      {
        path: "products/:id/info",
        element: <Infor/>
      },

      //9 - search
      {
        path: "search",
        element: <Search/>,
      },
      //10 - redirect
      {
        path: "teste",
        element: <Navigate to="/"/>
      }
    ]
  },

  //{
    //path: "contact",
    //element: <Contact/>
  //}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
