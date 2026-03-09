import React, { useState } from 'react'
import useDebounce from './usedebounce'
const Exampledebounce = () => {
    const [inputVal,setVal]=useState('')
    const debounce=useDebounce(inputVal)
  return (
    <><input type="text" onChange={(e)=>setVal(e.target.value)}/>
    <p>{debounce}</p></>
  )
}

export default Exampledebounce