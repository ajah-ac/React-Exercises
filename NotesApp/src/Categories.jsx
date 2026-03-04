import { Fragment } from "react"
import { useRef } from "react"
import { Link, NavLink } from "react-router"

export default function Categories(){
    const buttonRef=useRef(null)
return(
<section  className="categories">

<ul className="categories">
     <li><NavLink to='/note' className="link">All notes </NavLink></li>
 <li ><NavLink to='/note/work' className="link">Work</NavLink></li>
 <li ><NavLink to='/note/personal' className='link'>Personal</NavLink> </li>
 <li ><NavLink to='/note/ideas' className='link'>Ideas</NavLink></li>
 </ul>

</section>)
}