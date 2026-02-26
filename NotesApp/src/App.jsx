import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Searchsec from './Search'
import Categories from './Categories'
import Notes from './Notes'
import Note from "./Note";
import { Plus } from 'lucide-react'

function App() {
  return (
    <>
     <Header/>
     <Searchsec/>
     <Categories/>
    <Notes title={'Grocery List'} description={'Eggs Milk'}/>
     <Note/>

<button className='addBtn'>
  <Plus size={48}/>
</button>
    </>
  )
}

export default App
