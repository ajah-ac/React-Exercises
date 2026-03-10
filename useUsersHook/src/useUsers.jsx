import React, { useState } from 'react'
import { useEffect } from 'react'
const useUsers = () => {
    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [Error,setError]=useState(null)
    useEffect(()=>{
        setIsLoading(true)
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(resp=>setData(resp.slice(0,10)))
.catch(error=>setError(error))
.finally(()=>setIsLoading(false))

    },[])
  return {
    users:data,
    isLoading:isLoading,
    error:Error
  }
}

export default useUsers