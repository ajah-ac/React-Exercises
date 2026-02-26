import './App.css'
import { useState } from 'react'
import { Ellipsis, Image, Italic, List,ListChecks, PenLine, X } from 'lucide-react'
export default function Note(props) {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const date = new Date()
    const fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
   function handleSubmit(e){
e.preventDefault()
   }
   function saved(){
props.setNewNote(prev=>[...prev,{title:title,text:text}])
setTitle('')
setText('')
   }
   return (<>
        <nav className='note-nav'>
            <X />
            <h1>New Note</h1>
            <button style={{ color: 'blue' }} onClick={saved}>Save</button>
        </nav>
        <form action="" className='single-note' onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Note Title"
                onChange={(e) => setTitle(e.target.value)} />
            {fullDate}
            <textarea name="" id=""
                placeholder="Start typing your thoughts..."
                onChange={(e) => setText(e.target.value)}>
            </textarea>
        </form>
        <footer className='single-note-footer'>
            <div className='writting'>
                <h1>B</h1>
                <Italic />
                <ListChecks />
                <List />
            </div>
            <div className='imaging'>
                <Image />
                <PenLine />
                <Ellipsis />
            </div>
        </footer>
    </>)
}