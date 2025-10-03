import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import CartPage  from './pages/CartPage'
import ProductDetails from './pages/ProductDetails'
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import Footer from './pages/Footer';
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<ProductDetails/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/FAQs' element={<FAQs/>}/>
        <Route path='/Footer' element={<Footer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App