import React, { useEffect, useState } from 'react'

const useProducts = () => {
    const [products,setproducts]=useState([])
    const [error,setError]=useState(null)
    useEffect(()=>{
const fetchProducts= async ()=>{
    try {
        
        const resp=await fetch(`https://api.escuelajs.co/api/v1/products`)
        const  data= await resp.json()
        setproducts(data)
    } catch (err) {
        setError(err.message)
    }
}
    fetchProducts()

    }
    ,[])
  return {products,error}
}

export default useProducts