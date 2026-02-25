import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import WeatherDisplay from './WeathDisplay'
import { fetchWeather } from './fetchweather'

function App() {
  const [inputVal, setInput] = useState('')
  const [debounce, setDebounced] = useState('')
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => { setDebounced(inputVal) }, 400)
    return () => clearTimeout(timer)
  }, [inputVal])

  useEffect(() => {
    if (!city) return
    fetchWeather(city)
      .then(resp => setWeather(resp))
      .catch(e => console.log(e))
  }, [city])

  function handleSubmit(e) {
    e.preventDefault()
    setCity(debounce)
    setInput('')
    setDebounced('')
  }

  return (
    <>
      <Header inpts={inputVal} submit={handleSubmit} setInput={setInput} />
      {weather && <WeatherDisplay weather={weather}/>}
    </>
  )
}

export default App