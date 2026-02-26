import { ShoppingCart } from "lucide-react";
import {  useState } from "react";
import Note from "./Note";
export default function Notes(props){
  
    return (<> 
    <button className="note-container" onClick={props.handleOpenNote}>
    <div className="note-img">
<ShoppingCart size={64} color='#9AC8F6'/>
</div>
 <div className="note-description">
    <h1>{props.title}</h1>
    <p> {props.description}</p>
 </div>
    </button>
    </>)
}