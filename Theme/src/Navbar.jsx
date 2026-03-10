import React from 'react'
import { useContext } from 'react'
import ThemeContext from './ThemeContext'
const Navbar = () => {
    const {theme,toggleTheme}=useContext(ThemeContext)
  return (
    <div className={theme}>
        <h1>Hi here</h1>
        <button onClick={toggleTheme}>Change theme</button>
    </div>
  )
}

export default Navbar