import React from 'react'

const MenuItem = ({image, name, price}) => {
  return (
    <div className='menuItem'>
      <div style={{backgroundImage: `url(${image})`}}></div>
      <h2>{name}</h2>
      <p>£{price}</p>
    </div>
  )
}

export default MenuItem