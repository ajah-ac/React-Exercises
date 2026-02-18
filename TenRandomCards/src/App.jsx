import { useState ,useEffect} from 'react'

import './App.css'
import Cards from './cardUsers'

function App() {
  const [cards, setCards] = useState([])
const [trigger,setTrigger]=useState(0)
  useEffect(()=>{
fetch('https://randomuser.me/api/?results=10')
.then(resp=>resp.ok?resp.json():new Error('not worksing'))
.then(response=>setCards(response.results))
.catch(err=>console.log(err))

    
  },[trigger])

  return (
    <main>
        <button onClick={()=>setTrigger(trigger+1)} className='btn'> Get New People</button>

    <section className='cards'>
    
    { cards.map(card=>(<Cards 
    key={card.cell}
    imgs={card.picture.large} 
    name={card.name.first +' ' + card.name.last} 
    occupation={`${card.location.city},${card.location.country}`}
  age={card.dob.age}
  gender={card.gender}
  phone={card.phone}
  
  
    />))}
    </section>
</main>
  )
}

export default App
