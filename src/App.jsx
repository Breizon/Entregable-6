import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import ProtectedRoutes from './components/shared/ProtectedRoutes'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductInfo from './pages/ProductInfo'
import Purchases from './pages/Purchases'
import { getAllProducts } from './store/slices/products.slice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  // Seccion codigo para crear nuevo usuario
  // useEffect(() => {
  //   const URL = 'https://e-commerce-api.academlo.tech/api/v1/users'

  //   const data = {
  //     firstName: 'Esteban',
  //     lastName: 'Caiza',
  //     email:'becn2772@gmail.com',
  //     password: 'becn277211',
  //     phone:'0123456789',
  //     role:'admin'
  //   }

  //   axios.post(URL, data)
  //     .then(res => res.data)
  //     .catch(err => console.log(err))
  // }, [])
  
  //  Aqui termina

  return (
    <div className="App">
      <header className='headerInit'><Header /></header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />}/>
        {/* Rutas protegidas */}
        <Route element={<ProtectedRoutes/>}>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/purchases' element={<Purchases />}/>
        </Route>
        <Route path='/product/:id' element={<ProductInfo/>}/>
      </Routes>
      <footer><Footer/></footer>
    </div>
  )
}

export default App
