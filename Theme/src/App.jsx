import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeContext from './ThemeContext'
import { useContext } from 'react'
import Navbar from './Navbar'
function App() {
const [theme,setTheme]=useState('light')
function toggleTheme(){
  setTheme(prev=>(prev==='light'?'dark':'light'))
}
  return (
    < ThemeContext.Provider value={{theme,toggleTheme}}>
      <div className={theme}>
<Navbar/>
      <h1>Hi there</h1>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
