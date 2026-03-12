import { useCallback, useState ,useMemo} from 'react'

import './App.css'
import useProducts from './Products'
import Product from './Product'
function App() {
const { products,error}=useProducts()
const [search,setSearch]=useState(' ')
const filteredProd=products.filter(prod=>prod.title.toLowerCase().includes(search.toLowerCase()) )
const handleChange=useCallback(e=>setSearch(e.target.value),[])
  return (
    <>
    {error!==null && <h1> Not working</h1>}

<input type="text" placeholder='Enter name' onChange={handleChange}/>

<ul>{filteredProd.map(prod=><li key={prod.id}><Product title={prod.title} price={prod.price} image={prod.images[0]}/></li>)}
</ul>
    </>
  )
}

export default App
