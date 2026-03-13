import { useCallback, useState ,useMemo} from 'react'
import useDebounce from './useDebounce'
import './App.css'
import useProducts from './Products'
import Product from './Product'
function App() {
const { products,error}=useProducts()
const [input,setInput]=useState(' ')
const search=useDebounce(input)
const filteredProd=useMemo(()=>products.filter(prod=>{
  if(!input.trim()) {return false}
   return prod.title.toLowerCase().includes(search.toLowerCase()) }),[search])
const handleChange=useCallback(e=>setInput(e.target.value),[])
  return (
    <>
    {error!==null && <h1> Not working</h1>}

<input type="text" placeholder='Enter name' onChange={handleChange}/>

<ul className='product-list' >{filteredProd.map(prod=><li key={prod.id}><Product title={prod.title} price={prod.price} image={prod.images[0]}/></li>)}
</ul>
    </>
  )
}

export default App
