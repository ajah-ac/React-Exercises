import './App.css'
export default function Die(props){
    return (
        <>
        <button style={{backgroundColor:props.held?'green':'white'}} onClick={()=>props.hold(props.id)}> {props.value} </button>
        
        </>
    )
}