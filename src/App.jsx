import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './components/Home/HomePage'
import AboutPage from './components/About/AboutPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      {/* <HomePage /> */}
      <AboutPage />

    </div>
  )
}

export default App
