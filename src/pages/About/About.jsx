import React from 'react'
import "./About.css"
import MultiplePizzas from "../../assets/multiplePizzas.jpeg"

const About = () => {
  return (
    <div className='about'>
      <div 
      className='aboutTop'
      style={{backgroundImage: `url(${MultiplePizzas})`}}>
      </div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>"Step into the savory world of Express Pizza, where pizza isn't just a dish—it's an experience. Our passion for crafting the perfect pie is evident in every aspect of our restaurant, from the warm ambiance to the tantalizing aroma wafting from our brick oven. We start with the finest ingredients, from locally sourced produce to imported cheeses and cured meats, ensuring that each slice is a symphony of flavor. Our skilled pizzaiolos hand-stretch the dough to perfection, creating a crispy yet chewy crust that's the foundation of every masterpiece. <br /><br />
        But it's not just about the food—it's about the memories we create. Whether you're gathering with friends for a casual dinner, celebrating a special occasion with loved ones, or simply treating yourself to a solo indulgence, our welcoming atmosphere and attentive service make every visit memorable. At Express Pizza, we believe that pizza is more than just a meal; it's a shared experience that brings people together. So come join us and let us take you on a culinary journey you won't soon forget. Your adventure awaits at Express Pizza —where every pizza tells a delicious story."</p>
      </div>
    </div>
  )
}

export default About