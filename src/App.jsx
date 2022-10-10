import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './components/Home/HomePage'
import AboutPage from './components/About/AboutPage'
import ContactPage from './components/Contact/ContactPage'
import ProductPage from './components/Product/ProductPage'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AboutUs' element={<AboutPage />} />
        <Route path='/ContactUs' element={<ContactPage />} />
        <Route path='/Product' element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default App
