

import './App.css'
import { useEffect ,useState} from 'react'

function App() {
  const [posts, setPosts] = useState([])
  const [error,setError]=useState(null)
  const [isloading,setLoading]=useState(false)
  function fetchPosts(){
    setLoading(true)
  fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(response=>{
  setPosts(response.slice(0,10)) })
.catch(error=>setError(error))
.finally(()=>{setLoading(false)})
    }
useEffect(()=>{
  fetchPosts()
  },[])

  return (
    <>
    {isloading && <h1>Loading.....</h1>}

  {error!==null && <h1> An error occurred  fetching your data</h1> }
  <h1>Top ten Posts</h1>
     {<><ul className='links-container'> {posts.map(post=><li key={post.id}><h1><span style={{fontWeight:'normal'}}>Title:</span>{post.title}</h1>
     <p>{post.body}</p></li>)}</ul>
     <button onClick={fetchPosts}>Refresh</button>
     </>
     
     }
    </>
  )
}

export default App
