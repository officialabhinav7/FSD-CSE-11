import React from 'react'

const Saman = ({ title, price, image }) => {
  return (
    <div className='items'>
      <img src={image} height={100} alt="item" />
      <h2>{title}</h2>
      <h3>₹{price}</h3>
      <button>Add To Cart</button>
    </div>
  )
}

export default Saman