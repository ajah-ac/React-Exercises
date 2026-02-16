import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
//Exercise 1:To capture user clicks:button,alert
//Exercise 2 :Map through a list and render the elements
  const [animal, setAnimal] = useState()

const animals=['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
const listAnimals=animals.map(item=>{
  return (<li key={item}>{item}</li>)
})



function handleClick(){
  return alert('Button was clicked')
}
  return (
    <>
<button onClick={handleClick}> Click me!</button>
<ul>{listAnimals}</ul>
    </>
  )
}

export default App
