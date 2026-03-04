import { useState } from 'react'
import './App.css'
import Header from './Header'
import Searchsec from './Search'
import Categories from './Categories'
import Notes from './Notes'
import Note from "./Note";
import { Plus } from 'lucide-react'
import { Route,Routes } from 'react-router'

function App() {
  const [notes,setNotes]=useState([])
  const [add,setAdd]=useState(false)
  return (
    <>
     <Header/>
     <Searchsec setNotes={setNotes}/>
     <Categories/>
     <section className='notes-section'>
         <Notes title={'Grocery List'} description={'Eggs Milk'}/>
              {notes.length>=1 && notes.map((note ,index)=>(<Notes notes={notes}  id={index} key={index} title={note.title} description={note.text} />))}
</section>

<button className='addBtn' onClick={()=>setAdd(prev=>!prev)}>
  <Plus size={48}/>
</button>

{add &&  <Note setNewNote={setNotes} />}




<Routes>
  <Route path='/newnote'></Route>
  <Route path='/note' element={<Note/>}/>
</Routes>
</>
  )
}

export default App
