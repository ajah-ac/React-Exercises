import { EyeIcon } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

const Form = () => {
const [passType,setPass]=useState(true)
  function handleSubmit(e){
e.preventDefault()
const formdata=new FormData(e.target)
const password=formdata.get('password')
if(password.length<6){
  alert('Password should be atleast 6 or more characters')
}
  }
  return (


    <form action="" onSubmit={handleSubmit}>
        <label htmlFor=""> Email:<input type="text" name='email' /></label>
<label htmlFor=""> Password:<input type={passType?"password":'text'} name='password'/> <button onClick={()=>{setPass(prev=>!prev)}}><EyeIcon/></button> </label>
<button type='submit'>Submit</button>
    </form>


)
}

export default Form