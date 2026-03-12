
import './App.css'
import Dashboard from './Dashboard'
import withAuth from './withAuth'
function App() {
const Aunthenticated=withAuth(Dashboard)
  return (
    <>
      <Aunthenticated/>
    </>
  )
}

export default App
