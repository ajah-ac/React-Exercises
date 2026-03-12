import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useUserPosts from './useUserPosts'

function App() {
const [inputVal,setInputVal]=useState(0)
const {users,isLoading,error,posts}=useUserPosts(inputVal)
const userPosts=posts.map(post=><li key={post.id}><h1>Title:{post.title} <p style={{fontWeight:'normal'}}>{post.body}</p></h1></li>)
const selectedUser=users.find(user=>user.id===inputVal)
  return (
    <>
<select name="" id="" onChange={(e)=>{setInputVal(+e.target.value)}}>
  <option value="" > Select User</option>
  {users.map(user=>  <option key={user.id} value={user.id}>{user.name}</option>
)}
</select>
<ul>

{ posts.length>0 && (<>
<h1>Posts for {selectedUser.name}</h1>
  {userPosts}
  </>)}
</ul>

 </>
  )
}

export default App

