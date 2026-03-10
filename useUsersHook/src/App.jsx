import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useUsers from './useUsers'
function App() {
const {isLoading,error,users}=useUsers()
  return (
    <>
      {isLoading && <h1>Please wait as we fetch your data</h1>}
      {error!==null && <h1> An error occured while fetching your data</h1>}
      {users.length> 0 && <ul>
        {users.map(user=><li key={user.id}> <h1>Name:{user.name}</h1> </li>)}
        
        
        </ul>}
    </>
  )
}

export default App
