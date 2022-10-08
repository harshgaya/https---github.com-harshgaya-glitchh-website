import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './components/Home/HomePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <HomePage />

    </div>
  )
}

export default App
