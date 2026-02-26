import './App.css'
import { Ellipsis, Image, Italic, List, ListCheck, ListChecks, PenLine, X } from 'lucide-react'
export default function Note(props) {
    const date = new Date()
    const fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    return (<>
        <nav className='note-nav'>
            <X />
            <h1>New Note</h1>
            <h1 style={{ color: 'blue' }}>Save</h1>
        </nav>
        <form action="" className='single-note'>
            <input type="text" placeholder="Note Title" />
            {fullDate}
            <textarea name="" id="" placeholder="Start typing your thoughts...">
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