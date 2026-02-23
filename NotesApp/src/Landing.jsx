import draw from './assets/draw.png'
import gesture from './assets/gesture.png'


export default function Landing(){
    return (<>
    
    <section className="container">
        <div className="images">
<div className='img1'><img src={draw} alt="" /></div>
<div className='img2'> <img src={gesture} alt="" /></div>

        </div>
    </section>
    <section>
<div className="whatwedo"></div>
<div className="getStartedbtn"> 
    <button> Today</button>
</div>

    </section>
    
    </>)
}