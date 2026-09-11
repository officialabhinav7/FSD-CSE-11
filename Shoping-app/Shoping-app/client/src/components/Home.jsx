import React from 'react'
import Saman from './Saman'

const Home = () => {
  const itemData = [
    {
      id: 1,
      title: "React JS",
      price: 756,
      image: "/react.png"
    },
    {
      id: 3,
      title: "Node JS",
      price: 599,
      image: "/node.png"
    },
    {
      id: 2,
      title: "Node JS",
      price: 599,
      image: "/node.png"
    }
  ]

  return (
    <div className='home'>
      <h1 >Shopping Items</h1>

      {itemData.map((item) => (
        <Saman 
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  )
}

export default Home