import React from 'react'

const withAuth = (Component) => {
    const isAunthenticated=true
  return function(props){
    if(isAunthenticated){
        return <Component {...props}/>
    }
    else {
        return <p>Please login to Access</p>
    }
  }
}

export default withAuth