import {users} from './jsondata'
export default function Users(props){
    function handleSubmit(e){
        e.preventDefault()
           const formdata= new FormData(e.target)
    const data=formdata.get('serch')
props.setFind(data)
console.log(data)

    }
const found=users.find(item=>item.id===Number(props.search))

    return (<>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your id' name='serch'/>
<button type='submit'>Search</button>
    </form>
    {found?<p> Name:{found.name} <br/> Email:{found.email}</p>:''}
    
    </>)
}