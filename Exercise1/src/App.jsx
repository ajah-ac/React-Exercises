import { useState } from 'react'
import './App.css'
import Lists from './List'

function App() {
  const [count, setCount] = useState(0)
//Exercise 1:To capture user clicks:button,alert
//Exercise 2 :Map through a list and render the elements
//Exercise 3:MapThrough A List And Rendering (With A Custom Component)

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
<Lists items={animals}/>
    </>
  )
}

export default App
