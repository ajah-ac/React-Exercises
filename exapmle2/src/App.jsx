import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
function App() {
  const [count, setCount] = useState(0)
const array=[1,2,3,4,5]
const interRef=useRef([])
const indexRef=useRef(0)
useEffect(()=>{
const timer=setInterval(()=>{
  if(indexRef.current>=array.length)
  {
    clearInterval(timer)
    return
  }
  else{
interRef.current.push(array[indexRef.current])
indexRef.current+=1}
console.log(interRef)
},1000)
 return ()=>clearInterval(timer)
},[])
  return (
    <>
<Counter/>
    </>
  )
}

export default App
