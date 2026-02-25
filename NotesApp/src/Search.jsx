import { Search } from "lucide-react"

export default function SearchSec(){
    return (<>
    <div className="search-container">
<form action="" className="searchForm">
    <Search color='gray'/>

    <input type="text" placeholder="Search your notes"/>
</form>
    </div>
    </>)
}