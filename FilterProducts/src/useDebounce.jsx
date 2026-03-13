import React, { useEffect, useState } from 'react'

const useDebounce = (input,delay=1000) => {
    const [debounce,setDebounce]=useState('')
    useEffect(()=>{
        const Timer=setTimeout(()=>{setDebounce(input)},delay)
    return ()=>{clearTimeout(Timer)}
    },[input])
  return debounce
}

export default useDebounce