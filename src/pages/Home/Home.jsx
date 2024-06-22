import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../../assets/pizza.jpg"
import "./Home.css"

const Home = () => {
  return (
    <div className='home'
    style={{backgroundImage: `url(${BannerImage})`}}>
      <div 
      className='headerContainer'
       >
        <h1>Express Pizza</h1>
        <p>Satisfy Your Cravings, <br />One Slice at a Time</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home