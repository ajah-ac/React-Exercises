import { ShoppingCart } from "lucide-react";
import {  useState } from "react";
export default function Notes(props){
    const [clicked,SetClicked]=useState(false)
    return (<> 
    <div className="note-container">
    <div className="note-img">
<ShoppingCart size={64} color='#9AC8F6'/>
</div>
 <div className="note-description">
    <h1>{props.title}</h1>
    <p> {props.description}</p>
 </div>
    </div>
    </>)
}