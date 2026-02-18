import {useState } from 'react'
import plussign from './assets/plussign.png'
import './App.css'
import DisplayItems from './displayItems'

function App() {
  const [task,setTask]=useState('');
  const [todos,setTodos]=useState([])

  function handleSubmit(e){
e.preventDefault()
setTask('')
setTodos(prev=>[...prev,task])
console.log(task)
  }

function handleDelete(deltodo){
  setTodos(todos.filter((_,index)=>deltodo!==index))
}


return (
  <main>
<form action="" onSubmit={handleSubmit}className='forms'>
<input type="text" placeholder='Add todo...' onChange={(e)=>setTask(e.target.value)} />
<button> <img src={plussign} alt="" />  </button>
</form>

<div>
{ todos.map((todo,index)=>(<DisplayItems key={index} task={todo} delete={()=>handleDelete(index)}/>))}


</div>


    </main>
  )
}

export default App
