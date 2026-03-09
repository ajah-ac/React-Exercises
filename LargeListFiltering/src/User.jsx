import React from 'react'

const User = ({name,country,age}) => {
  return (
    <>
<h1>Name:{name}</h1>
<h3>Age:{age}</h3>
<h3>Country:{country}</h3>
    </>
  )
}

export default User