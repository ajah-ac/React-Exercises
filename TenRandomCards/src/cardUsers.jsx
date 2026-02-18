import './App'
export default function Cards(props) {
    return (<>

        <div className='flip-card'>
            <div className='fc-inner'>
                <div className='fc-front'>
                    <img src={props.imgs} alt="" />
                    <div className='names'>
                        <h4>{props.name}</h4>
                        <span>{props.occupation}</span>
                    </div>
                </div>
                <div className='fc-back'>
<ul>
<li>Age:{props.age}</li>
<li>Gender:{props.gender}
</li>
<li>Phone:{props.phone}
</li>

</ul>
                </div>

            </div>

        </div>



    </>)
}