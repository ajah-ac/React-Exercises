import { useState } from 'react'
import deletebtn from './assets/deletebtn.png'
import './App.css'

export default function DisplayItems(props) {
  const [checked,setChecked]=useState(false)

    return (
        < p className='displayfm'>
            <input
                type="checkbox"
                checked={checked}
                onChange={()=>setChecked(prev=>!prev)}
            />
            <label style={{textDecoration:checked?'line-through':'none'}}>
                {props.task}
            </label>
            <button onClick={props.delete}>
                <img src={deletebtn} alt="" />
            </button>
            </p>)
}