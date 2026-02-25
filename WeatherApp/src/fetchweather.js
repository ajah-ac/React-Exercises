export async function fetchWeather(city) {
  try {
    const apikey='a1daa0f48f71db29bbd2d05db3bd048f'
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    )
    if (!res.ok) throw new Error('City not found')
    const data = await res.json()

    return {
      name: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }
  } catch (e) {
    alert('Enter a valid city')
    throw new Error(e.message)
    
  }
}