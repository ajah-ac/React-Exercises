
import { CircleUserRound, Menu, ShieldUser } from 'lucide-react'

export default function Header(){
    return (<>
    <nav>
        <div className='navbar-part1'>

        <Menu color='blue'/>
        <h1>Notes</h1>
                </div>
<div className='use-profile'>
        <CircleUserRound color='blue'/>
</div>
    </nav>
    
    
    </>)
}