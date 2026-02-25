
import './App.css'
import search from './assets/search.png'
export default function Header(props) {
  return (
    <>
      <form onSubmit={props.submit} className='header'>
        <img src={search} alt="search icon" />
        <input
          onChange={(e) => props.setInput(e.target.value)}
          placeholder="Search for a city"
        />
      </form>
    </>
  )
}