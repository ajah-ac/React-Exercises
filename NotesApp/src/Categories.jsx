import { Fragment } from "react"
import { useRef } from "react"

export default function Categories(){
    const buttonRef=useRef(null)
    const handleClick=()=>{
        if(buttonRef.current){
            buttonRef.current.classList.toggle('clicked')
        }
    }
return(
<section  className="categories">
 <section>
    <button ref={buttonRef} onClick={handleClick}>

<h1>            All Notes
</h1>    </button>
        <button>
        
            <h1>Work</h1>
    </button>    <button>
        <h1>
            Personal </h1>
    </button>   
     <button>
        <h1>
            Ideas</h1>
    </button>
    </section>   


</section>)
}