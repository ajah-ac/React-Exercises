import React from 'react'
import { useState ,useRef,useEffect} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    const counterRef=useRef(null)

    function Start(){
        if(counterRef.current) return
 counterRef.current=setInterval(()=>{setCount(prev=>prev+1)},1000)

    }

    function stop(){
        clearInterval(counterRef.current)
        counterRef.current=null
    }
    function reset(){
stop()   
setCount(0) }



  return (
    <>
<h1>{count}</h1>

<button onClick={Start}>Start</button>
<button onClick={stop}>Stop</button>
<button onClick={reset}>Reset</button>
    </>
  )
}

export default Counter