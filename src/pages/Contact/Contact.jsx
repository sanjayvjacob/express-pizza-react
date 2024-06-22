import React from 'react'
import "./Contact.css"
import pizzaLeft from "../../assets/pizzaLeft.avif"

const Contact = () => {
  return (
    <div className='contact'>
      <div 
      className='leftSide'
      style={{backgroundImage: `url(${pizzaLeft})`}}>
      </div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder='Enter full name...' />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder='Enter email...' />
          <label htmlFor="message">Message</label>
          <textarea 
          rows="6" 
          placeholder="Enter message..." 
          name=""
          required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact