import React from 'react'
import { useState,useEffect } from 'react'
const useDebounce = (inputVal) => {
    const [debounced,setDebounced]=useState('')
    useEffect(()=>{
        const Timer=setTimeout(()=>{setDebounced(inputVal)},500)
  return ()=>{clearTimeout(Timer)}
    },[inputVal])
  return debounced
}

export default useDebounce