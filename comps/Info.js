import React from 'react'

function Info({ user, Key }) {
    console.log(user)
  return (
    <div>
        <h1>{user.name}</h1>
        <h2>{user.rollNo}</h2>
    </div>
  )
}

export default Info