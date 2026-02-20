import { useState } from 'react'
import './App.css'
import Die from './Die'
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

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
  const gameWon=values.every(die=>die.isHeld) && values.every(die=>die.value===values[0].value)

  
  function handleRoll(){
  
    setValues(prev=>gameWon?generateNew() :prev.map(die=>die.isHeld?die:{...die,value: Math.ceil(Math.random() * 6)}))
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
{ gameWon && <Confetti/>}
      </div>
      <button onClick={handleRoll}>{gameWon?'New Game':'Roll'}</button>
    </main>
  )
}

export default App
