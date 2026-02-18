import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './cardUsers'

function App() {
  const [cards, setCards] = useState([])
  useEffect(()=>{
fetch('https://randomuser.me/api/?results=10')
.then(resp=>resp.ok?resp.json():new Error('not worksing'))
.then(response=>setCards(response.results))
.catch(err=>console.log(err))

    
  },[])

  return (
    <section className='cards'>


    { cards.map(card=>(<Cards 
    key={card.cell}
    imgs={card.picture.large} 
    name={card.name.first + card.name.last} 
    occupation={`${card.location.city},${card.location.country}`}
  age={card.dob.age}
  gender={card.gender}
  phone={card.phone}
  
  
    />))}
    </section>
  )
}

export default App
