export default function Lists(props){
    const list=props.items.map(item=>{
        return ( <li key={item}>{item}</li>)
    })

    return ( <ul>{list}</ul>)
}