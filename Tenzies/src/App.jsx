import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div>


    <h1>Tenzies</h1>
    <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>

<div className='dice'>


  <Die value={1}/>
  <Die value={2}/>
  <Die value={3}/>
  <Die value={4}/>
  <Die value={5}/>
  <Die value={6}/>
  <Die value={1}/>
  <Die value={2}/>
  <Die value={3}/>
  <Die value={4}/>


</div>
    </main>
  )
}

export default App
