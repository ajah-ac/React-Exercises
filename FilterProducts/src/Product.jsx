import React from 'react'

const Product = ({title,price,image}) => {
  return (

    <> <div>
        <h1>Title:{title}</h1>
        <span>Price:{price}</span>

        </div> 
        <div> 
            <img src={image}alt="" style={{width:'200px'}} />
        </div>
    </>
  )
}

export default Product