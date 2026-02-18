import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './cardUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cards name='hello' imgs='ieh'/>
    </>
  )
}

export default App
