import { useState } from 'react'
import plussign from './assets/plussign.png'
import './App.css'

function App() {
  const [todo, setTodo] = useState('')

  return (
    <>
    

    <form action="" className='forms'>
<input type="text" name='search' placeholder='Add todo...
' />
<button > <img src={plussign} alt="" /></button>

    </form>
<div>
  
</div>




    </>
  )
}

export default App
