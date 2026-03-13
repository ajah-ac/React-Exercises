import React from 'react'

const Product = ({title,price,image}) => {
  return (

    <> <div>
        <h4>Product:{title}</h4>
        <span>Price:{price}</span>

        </div> 
        <div> 
            <img src={image} alt={title} style={{width:'200px'}} />
        </div>
    </>
  )
}

export default Product