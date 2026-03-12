import React from 'react'
import { useEffect,useState } from 'react'
const useUserPosts = (inputVal) => {
    const [isLoading,setIsLoading]=useState(true)
   const [error,setError]=useState(null)
   const [users,setUsers]=useState([])
   const [posts,setPosts]=useState([])

  

useEffect(()=>{  
     const fetchusers=async ()=>{
 try{
 const response=await fetch('https://jsonplaceholder.typicode.com/users')
 const data= await response.json()
setUsers(data)
 }
 catch(err)
 {
setError(err.message)
 } finally{
setIsLoading(false)
 }
   } 
   fetchusers()
},[])
useEffect(()=>{  
     const fetchPosts=async ()=>{
 try{
 const response=await fetch( `https://jsonplaceholder.typicode.com/posts?userId=${inputVal}`)
 const data= await response.json()
setPosts(data)
 }
 catch(err)
 {
setError(err.message)
 } finally{
setIsLoading(false)
 }
   } 
   fetchPosts()
},[inputVal])

  return {users,error,isLoading,posts}
}

export default useUserPosts