import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [display, setDisplay] = useState('')
  const [storedval,setStored]=useState(null)
  const [operator, setOperator]=useState(null)
  function handleNumber(val) {
    if (val == 'ax') { setDisplay('') }
    else if (val === '.' || !isNaN(val)) {
      setDisplay(prev => prev + val)
    }
  }
  function handleOperator(ops){
setStored(Number(display))
setDisplay('')
setOperator(ops)
  
}
function handleEquals(){
  if(display==='' || storedval===null)return 
  let result;
  if(operator==='+')result=storedval + Number(display)
  else if(operator==='-')result=storedval -Number(display)
else if(operator==='x')result=storedval * Number(display)
else if(operator==='/')result=storedval / Number(display)

  setDisplay(result.toString())
  setStored(null)
  setOperator(null)
}











  return (
    <>
      <div className='displayArea'> {display}</div>
      <main >
        <div className='leftside'>
          <button onClick={() => { handleNumber('ax') }} >AC </button>
          <button >+/- </button>
          <button onClick={() => { handleNumber('%') }}>%</button>
          <button onClick={() => { handleNumber('9') }} >9</button>
          <button onClick={() => { handleNumber('8') }}  >8</button>
          <button onClick={() => { handleNumber('7') }}  >7</button>
          <button onClick={() => { handleNumber('6') }}   >6</button>
          <button onClick={() => { handleNumber('5') }}  >5</button>
          <button onClick={() => { handleNumber('4') }}  >4</button>
          <button onClick={() => { handleNumber('3') }}  >3</button>
          <button onClick={() => { handleNumber('2') }}  >2</button>
          <button onClick={() => { handleNumber('1') }}  >1</button>
          <button onClick={() => { handleNumber('0') }} id='zero'>0</button>
          <button onClick={() => { handleNumber('.') }} id='dot'>.</button>




        </div>
        <div className='rightside'>
          <button onClick={() => { handleOperator('/') }}>  ÷ </button>
          <button onClick={() => { handleOperator('x') }}>  X </button>
          <button onClick={() => { handleOperator('-') }}>  - </button>
          <button onClick={() => { handleOperator('+') }}> + </button>
          <button onClick={ handleEquals}> = </button>



        </div>



      </main>
    </>
  )
}

export default App
