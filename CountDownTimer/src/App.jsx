import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Counter/>
        <section>
<h1></h1><button>Start</button>
<button>Stop</button>
<button>Restart</button>
    </section>




    </>)
}

export default App
