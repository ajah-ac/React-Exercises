import { useState,useMemo, useCallback, useEffect } from 'react'
import './App.css'
import Lists from './Lists'
import User from './User'
import useDebounce from './usedebounce'

function App() {
  const [inputVal, setInput] = useState('')
  const debouncedVal=useDebounce(inputVal)
const [count,setCount]=useState(0)

const users=useMemo(()=>{
  console.log('Filtering.....')
      if (!debouncedVal.trim()) return []

  return Lists.filter(user=>user.country.toLowerCase().startsWith(debouncedVal.toLowerCase()))},[debouncedVal])
  
  const handleOnchange=useCallback((e)=>{
    const value=e.target.value
setInput(value)
 },[])
  return (
    <>
    <input type="text" onChange={handleOnchange}/>
   <ul className='links-container'>  {users.map(user=>(
   <li key={user.id}><User  name={user.name} country={user.country} age={user.age}/> </li>))}</ul>
<button onClick={()=>setCount(prev=>prev+1)}>Click Me </button>
<h1>{count}</h1>
    </>
  )
}

export default App
