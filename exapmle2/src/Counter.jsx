import React from 'react'
import { useRef,useState } from 'react'
const Counter = () => {
    const [count,setCount]=useState(0)
    const  prevRef=useRef(null)
const start=()=>{
    prevRef.current=setInterval(()=>{setCount(prev=>prev+1)},1)
}
const stop=()=>{
clearInterval(prevRef.current)
prevRef.current=null
}

const reset=()=>{
stop()
setCount(0)
}
  return (
<>

<button onClick={start}>Start</button>
<button onClick={stop}>Stop</button>
<button onClick={reset}>Reset</button>
<h1>{count}</h1>


</>
)
}

export default Counter