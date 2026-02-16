import { useState } from 'react'
import './App.css'
import Users from './Users'

function App() {
  const [search, setSearch] = useState('')



//Exercise 1:Building form data
//Exercise 2:Handling Json data


function handleSubmit(formdata){
  const first=formdata.get('fname')
    const last=formdata.get('lname')
    return alert(`Hello ${first} ${last}`)

}
  return (
    <>
    <form action={handleSubmit}>
<input type="text" placeholder='Enter your first Name' name='fname'/>
<input type="text" placeholder='Enter your last Name' name='lname'/>
    <button>Greet Me</button>
    </form>
    <Users search={search} setFind={setSearch}/>
    </>
  )
}

export default App
