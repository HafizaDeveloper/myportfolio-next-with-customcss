import React from 'react'
import Navbar from './Navbar'
import "../app/styles/hero.css"

const Hero = () => {
  return (
    <div id="hero" className='hero-container'>
      <Navbar />
      <div className='hero-content min-'>
        <div className='hidden lg:block'></div>
        <div className='hero-text'>
        <div className='hero-main'>
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">Hafiza</p>
            <p data-aos="zoom-in-up">Mahnoor</p>
          </div>
        </div>
        </div>    
    </div>
  )
}

export default Hero
