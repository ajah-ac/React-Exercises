import './App.css'
export default function WeatherDisplay({weather}){
    return (
        <>

        <section className="city">
<div className="cityname">
<h1> {weather.name}</h1>
  <h4> {weather.description}
        </h4>
</div>

<div className="citymid" >
   <div className="img-container" >
    <img src={weather.icon} alt="image here" />
    </div> 
    <div className="temperature">
       <h1>
         {weather.temperature}°    
        </h1>
        <h4> {weather.description}
        </h4>
    </div>
</div>
 
        </section>
        
        </>
    )
}