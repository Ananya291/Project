import React from 'react'

function BottomNavigation({icon,text}) {
  return (
    <div>
        <img src={icon} />
        <h1>{text}</h1>
    </div>
  )
}

export default BottomNavigation