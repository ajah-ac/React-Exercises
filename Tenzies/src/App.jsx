import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'
import { nanoid } from "nanoid"

function App() {
  const [values, setValues] = useState(generateNew)
  function generateNew() {
    return new Array(10).fill(0).map(() => {
      return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }
    })
  }
  function handleRoll(){
    setValues(prev=>prev.map(die=>die.isHeld?die:{...die,value: Math.ceil(Math.random() * 6)}))
  }

function hold(id){//works
  console.log(id)
  setValues(prev=>prev.map(die=>die.id===id?{...die,isHeld:!die.isHeld}:die))
}


  return (
    <main>
      <div>

        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>

      <div className='dice'>
       {values.map(die=>(< Die key={die.id} value={die.value} hold={hold} held={die.isHeld} id={die.id}/>))}


      </div>
      <button onClick={handleRoll}>Roll</button>
    </main>
  )
}

export default App
