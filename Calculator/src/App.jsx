import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='displayArea'> here goes the solution</div>
    <main >
      <div className='leftside'>
     <button  >AC </button>
     <button  >+/- </button>
    <button  >%</button>
         <button value='9' >9</button>
                  <button value='8' >8</button>
                  <button value='7' >7</button>
                  <button value='6' >6</button>
                  <button value='5' >5</button>
                  <button value='4' >4</button>
                  <button value='3' >3</button>
                  <button value='2' >2</button>
                  <button value='1' >1</button>
         <button value='0' id='zero'>0</button>
                  <button value='.' id='dot'>.</button>
           



</div>
<div className='rightside'>
<button>  ÷ </button>
<button>  X </button>
<button>  - </button>
<button> + </button>
<button>  = </button>



</div>



    </main>
    </>
  )
}

export default App
