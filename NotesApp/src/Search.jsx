import { Search } from "lucide-react"
import { useState } from "react"
export default function SearchSec({getNote,notes}){
    const [searchVal,setSearchVal]=useState('')
// Add onChange handler
const handleSearchChange = (e) => {
  setSearchVal(e.target.value);
  const filtered = notes.filter(note => 
    note.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  getNote(filtered);
};

    return (<>
    <div className="search-container">
<form action="" className="searchForm" onSubmit={handleSearchChange}> 
    <Search color='gray'/>

    <input type="text" 
    placeholder="Search your notes"
    value={searchVal}
    onChange={(e)=>setSearchVal(e.target.value)}/>
</form>
    </div>
    </>)
}