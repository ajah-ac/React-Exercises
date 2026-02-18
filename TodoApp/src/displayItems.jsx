import { useState } from 'react'
import deletebtn from './assets/deletebtn.png'
import './App.css'

export default function DisplayItems(props) {
 
    return (
        < p className='displayfm'>
            <input
                type="checkbox"
            />
            <label>
                {props.task}
            </label>
            <button onClick={props.delete}>
                <img src={deletebtn} alt="" />
            </button>
            </p>)
}