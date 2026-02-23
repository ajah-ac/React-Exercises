export default function WeatherDisplay(props){
    return (
        <>
        <section className="city">
            {//city names and time of the day display
            }
<div className="cityname">
<h1> {props.city} kigali</h1>
<h3>{props.totd} evening</h3>
</div>

<div className="citymid" >
   <div className="img-container" >
    <img src={props.imgicon} alt="image here" />
    </div> 
    <div className="temperature">
       <h1>
         {props.temperature}
         8 degrees
    
        </h1>
        <h4> {props.condition}
            slightly cloudy
        </h4>
    </div>
</div>
 
        </section>
        
        </>
    )
}