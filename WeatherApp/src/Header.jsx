import './App'
import search from './assets/search.png'
export default function Header(){
    return (<>
    <div className="header">  
       <button> <img src={search} alt="" /></button>
        <input type="text" name="" id="" placeholder='Search for a city'/>
    </div>
    
    </>)
}