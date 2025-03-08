import {createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Service from './service/Service'
import Info from './pages/Info/Info'
import Pro from './pages/Pro'
import Product from './components/product/Product'


export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children : [
          { 
            path: "",
            element: <Home />
          },
          {
            path: "about",
            element: <About />
          },
          {
            path: "service",
            element: <Service />
          },
          {
            path: "info",
            element: <Info />
          },
          {
            path: "pro",
            element: <Pro />
          },
          { 
            path: "category/:id",
            element: <Product /> 
          },
        ]
    }
])