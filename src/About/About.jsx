import React from 'react'
import HeroSection from '../Home/HeroSection'
import "./about.css"
function About() {
  const data = "E-Commerce"
  return (
    <div className='Main-About'>
      <HeroSection data = {data} />
    </div>
  )
}

export default About