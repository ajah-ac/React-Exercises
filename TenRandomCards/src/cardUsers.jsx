import './App'
export default function Cards(props) {
    return (<>

        <div className='flip-card'>
            <div className='fc-inner'>
                <div className='fc-front'>
                    <img src={props.imgs} alt="" />
                    <div>
                        <h1>{props.name}</h1>
                        <h3>{props.occupation}</h3>
                    </div>
                </div>
                <div className='fc-back'>
                    back information
                </div>

            </div>

        </div>



    </>)
}